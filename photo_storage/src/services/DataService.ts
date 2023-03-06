import {DataType} from "../types/DataType";

export class DataService {

    static async getCollections(): Promise<DataType[]> {
        return await fetch("https://6405d1b6eed195a99f8d959f.mockapi.io/api/v1/photos")
            .then(res => res.json())
            .catch(err => {
                console.log(err)
                alert("Error while fetching data")
            })
    }
}

