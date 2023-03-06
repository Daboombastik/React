import React from 'react';
import '../../index.scss';
import Collection from "../Collection/Collection";
import {DataType} from "../../types/DataType";
import {DataService} from "../../services/DataService";
import InputBar from "../Input/InputBar";
import Tag from "../Tag/Tag";

function App() {

    let [data, setData] = React.useState<DataType>({categories: [{}], collections: [{}]})
    let [search, setSearch] = React.useState<string>("")
    React.useEffect(() => {
        DataService.getCollections().then(json => setData(json[0]))
    }, [])

    return (
        <div className="App">
            <h1>Your collections</h1>
            <div className="top">
                {/*<Tag data={data} categories={data.categories} collections={[{}]}></Tag>*/}
                <Tag data={data} search={""}></Tag>
                <InputBar value={search} callback={setSearch}></InputBar>
            </div>
            <div className="content">
                <Collection data={data} search={search}></Collection>
            </div>
            <ul className="pagination">
                <li>1</li>
                <li className="active">2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

export default App;
