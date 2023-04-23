import Head from "next/head";

const APP_NAME = "Eventbox";

export default function PageTitle(props) {
    return (
        <Head>
            <title>{props.title ? props.title + " - " + APP_NAME : APP_NAME}</title>
            {props.children}
        </Head>
    );
};