import LayoutComponent from "../../components/Layouts/LayoutComponent";

const Winners = (props: { title: string; }) => {
    document.title = props.title;
    return (
        <LayoutComponent>
            <h1>
                Winners
            </h1>
        </LayoutComponent>
    );
}

export default Winners;