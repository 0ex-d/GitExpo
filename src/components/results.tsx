import React, { useEffect, useState } from "react";
import Select, { ValueType } from "react-select";
import "react-select/dist/react-select.css";

/* mock data */
import mockResults from "../data/mock-repos.json";

interface Repo {
    author: string;
    name: string;
    avatar: string;
    description: string;
    url: string;
    language: string;
    languageColor: string;
    stars: number;
    forks: number;
    currentPeriodStars?: number;
}

/**
 * Filter by array of language or spoken language
 * Date range is a single condition
 */
interface Filter {
    id?: string;
    value?: string;
    date?: string;
    language?: string[];
    language_spoken?: string[];
}

/**
 * Current category of results shown
 */
enum ResultCat {
    REPO = "repo",
    USER = "user"
}

type SelectedItems = {
    label: any;
    value: any;
 }

/**
 * fmt Util
 * Takes a number as input and @output string seperated commas
 * @param num 
 */
function fmt(num:number):string {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

/**
 * FilterBy Util
 * @param data Object API data
 * @param filter filter keys from select
 */
const filterBy = (data:any[], filter:Filter):any[] => {
    return data.filter(obj =>
    Object.entries(filter).every(
        ([key, sub]) => sub.includes(obj[key]) // use .toLowerCase() in case-sensitive situations
    )
)};

const Result:React.FC = () => {

    const [results, setResults] = useState<Repo[]>([]);
    const [resultCat, setResultCat] = useState<ResultCat>(ResultCat.REPO);

    const [filtered, setFiltered] = useState<Filter[]>([]);
    const [selected, setSelected] = useState<ValueType<SelectedItems>>([]);

    useEffect(()=>{
        // filter by
        let filter = {language: ['Go','Python'] };
        let _results = filterBy(mockResults, filter);

        //setResults(_results);
        console.log(results);
    },[]);

    

    /**
     * 
     * @param value 
     * @param accessor 
     */
    const onFilterChange = (value:any, accessor:string) => {
        let _filtered = filtered;
        let insertNewFilter = 1;
    
        if (_filtered.length) {
          _filtered.forEach((filter, i) => {
            if (filter["id"] === accessor) {
              if (value === "" || !value.length) _filtered.splice(i, 1);
              else filter["value"] = value;
    
              insertNewFilter = 0;
            }
          });
        }
    
        if (insertNewFilter) {
          _filtered.push({ id: accessor, value: value });
        }
    
        setFiltered(filtered);
      };

    return (
        <>
        {/* Test multiple select */}
        <Select
          style={{ width: "50%", marginBottom: "20px" }}
          onChange={(sel:ValueType<SelectedItems>) => {
            setSelected(sel);
          }}
          value={selected}
          multi={true}
          options={results.map((repo, i) => {
            return { id: i, value: repo.language, label: repo.language };
          })}
        />
        <div className="mx-10 sm:mx-16 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Repo
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Author
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Language
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Stars
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((repo)=>(
                            <tr key={ repo.name }>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3">
                                            <a href={ repo.url } target="_blank" rel="noopener noreferrer" className="font-semibold text-lg text-blue-400 whitespace-no-wrap no-underline">
                                            { repo.name }
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <img src={ repo.avatar } className="h-4 w-4"
                                        alt={ repo.author }/>
                                    <p className="font-semibold text-gray-900 text-lg whitespace-no-wrap">{ repo.author }</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span className="relative">{ repo.language }</span>
                                    </span>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="font-semibold text-gray-900 whitespace-no-wrap">
                                    { fmt(repo.stars) }
                                    </p>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    {!results && (
                        <div className="text-lg text-center text-gray-500">
                        Nothing here :(
                     </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Result;
