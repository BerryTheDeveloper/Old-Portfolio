import Card from "../components/Card";

const Cards = () => {
    return (
        <div className="w-full flex">
            <div className="flex m-auto">
                <div className="flex justify-center flex-col">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="flex flex-col pt-64">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Cards;
