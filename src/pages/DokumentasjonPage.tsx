import "@cubone/react-file-manager/dist/style.css";
import "highlight.js/styles/default.css";
import "react-lowlight/all";

import { TreeItem } from "@mui/x-tree-view";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { Box, Heading, Loader, Modal, Switch, VStack } from "@navikt/ds-react";
import { useSuspenseQuery } from "@tanstack/react-query";
import kotlin from "highlight.js/lib/languages/kotlin";
import Markdown from "marked-react";
import mermaid from "mermaid";
import { Octokit } from "octokit";
import { ChangeEvent, createContext, useContext, useEffect, useRef, useState } from "react";
import React from "react";
import Lowlight from "react-lowlight";
import svgPanZoom from "svg-pan-zoom";
Lowlight.registerLanguage("kotlin", kotlin);

const octokit = new Octokit({});
export interface GithubContent {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string;
    type: string;
    _links: Links;
}

export interface Links {
    self: string;
    git: string;
    html: string;
}

interface AppContextType {
    showContent?: string;
    setShowContent: (string: string) => void;
}
const AppContext = createContext<AppContextType | undefined>(undefined);
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useJournalpost must be used within a JournalpostProvider");
    }
    return context;
};
export default function DokumentasjonPage() {
    const [showContent, setShowContent] = useState<string | undefined>();

    async function readFileAsText(ev: ChangeEvent<HTMLInputElement>) {
        const files = ev.target.files;
        if (files.length == 0) return;
        const file = ev.target.files[0];
        const fileBuffer = await file.text();

        return fileBuffer;
    }
    async function openFile(ev: ChangeEvent<HTMLInputElement>) {
        const fileBuffer = await readFileAsText(ev);
        setShowContent(fileBuffer);
    }

    return (
        <AppContext.Provider value={{ showContent, setShowContent }}>
            <div className="h-full w-full flex flex-row">
                <VStack className="h-full">
                    <Box
                        background="surface-default"
                        borderColor="border-default"
                        borderWidth="1"
                        borderRadius="small"
                        padding={"2"}
                    >
                        <Heading size="xsmall">Last lokal fil</Heading>
                        <input
                            id="file_input"
                            type="file"
                            name="Last fra fil"
                            accept="*/.mermaid"
                            onClick={(ev) => ((ev.target as HTMLInputElement).value = "")}
                            onChange={openFile}
                            className="border"
                        />
                    </Box>
                    <Box
                        className="w-[400px] h-full"
                        borderRadius={"medium"}
                        borderColor="border-default"
                        borderWidth="2"
                        padding={"2"}
                    >
                        <Heading size="xsmall">Github</Heading>
                        <React.Suspense fallback={<Loader />}>
                            <GithubTreeView />
                        </React.Suspense>
                    </Box>
                </VStack>
                <MermaidChart />
            </div>
        </AppContext.Provider>
    );
}
function GithubTreeView() {
    const { setShowContent } = useAppContext();
    const [githubEnabled, setGithubEnabled] = useState(false);

    async function updateShowedContent(link: string) {
        if (link.startsWith("folder_")) return;
        const content = await fetch(link);
        content.text().then((data) => {
            setShowContent(data);
        });
    }

    const { data: content } = useSuspenseQuery({
        queryKey: ["gitPage", githubEnabled],
        queryFn: async (): Promise<GithubContent[]> => {
            if (!githubEnabled) return [];
            const response = await octokit.request<GithubContent>("GET /repos/navikt/bidrag-dokumentasjon/contents", {
                owner: "navikt",
                repo: "bidrag-dokumentasjon",
            });
            return response.data as GithubContent[];
        },
    });
    const files = content?.filter((file) => file.type === "file") ?? [];

    return (
        <>
            <Switch size="small" checked={githubEnabled} onChange={(e) => setGithubEnabled(e.target.checked)}>
                Hent fra github
            </Switch>
            <SimpleTreeView
                defaultExpandedItems={["folder_root"]}
                onItemClick={(event, itemId) => updateShowedContent(itemId)}
            >
                <TreeItem itemId="folder_root" label={"bidrag-dokumentasjon"}>
                    {files.map((file) => (
                        <TreeItem itemId={file.download_url} label={file.name} />
                    ))}
                    {content?.filter((file) => file.type === "dir").map((folder) => <GithubTree folder={folder} />)}
                </TreeItem>
            </SimpleTreeView>
        </>
    );
}
function GithubTree({ folder }: { folder: GithubContent }) {
    const { data: content } = useSuspenseQuery({
        queryKey: ["gitPage", folder.path],
        queryFn: async (): Promise<GithubContent[]> => {
            const response = await octokit.request<GithubContent>(
                `GET /repos/navikt/bidrag-dokumentasjon/contents/${folder.path}`,
                {
                    owner: "navikt",
                    repo: "bidrag-dokumentasjon",
                }
            );
            return response.data as GithubContent[];
        },
    });

    return (
        <TreeItem itemId={`folder_${folder.path}`} label={folder.name}>
            {content
                .filter((file) => file.type === "file")
                .map((file) => (
                    <TreeItem itemId={file.download_url} label={file.name} />
                ))}
            {content
                .filter((file) => file.type === "dir")
                .map((folder) => (
                    <GithubTree folder={folder} />
                ))}
        </TreeItem>
    );
}

function MermaidChart() {
    const { showContent } = useAppContext();
    const [showDetailsKotlin, setShowDetailsKotlin] = useState<string | null>(null);

    const isRendering = useRef(false);
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // @ts-ignore
        window.callbackKotlin = (link: string) => {
            fetch(link)
                .then((res) => res.text())
                .then(async (data) => {
                    setShowDetailsKotlin(`${"```kotlin\n"}${data}\n${"```"}`);
                });
        };
    }, []);
    useEffect(() => {
        if (!showContent) return;
        isRendering.current = true;
        mermaid
            .render("mermaidSvg", showContent, divRef.current)
            .then((res) => {
                divRef.current.innerHTML = res.svg;
                if (res.bindFunctions) {
                    res.bindFunctions(divRef.current.firstElementChild);
                }
                svgPanZoom("#mermaidSvg");
            })
            .catch((e) => console.error("HERE", e));
    }, [mermaid, showContent]);
    const renderer = {
        code(snippet, lang) {
            return <Lowlight language={lang} value={snippet} />;
        },
    };
    return (
        <>
            <Modal
                style={{ maxHeight: "1000px", maxWidth: "max-content" }}
                open={showDetailsKotlin != null}
                closeOnBackdropClick
                onClose={() => setShowDetailsKotlin(null)}
            >
                <Modal.Body>
                    <Markdown value={showDetailsKotlin} renderer={renderer} />
                </Modal.Body>
            </Modal>
            <div ref={divRef} className="mermaid h-full grow w-full max-w-full [&_svg]:!max-w-full" />
        </>
    );
}
