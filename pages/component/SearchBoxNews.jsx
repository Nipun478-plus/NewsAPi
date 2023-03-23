import React from 'react'
import { useState } from 'react'
import {useRouter} from 'next/router'
export default function SearchBoxNews() {

    const router=useRouter();
    const [search,setSearch]=useState("");
    const handelchange=(event)=>{
        setSearch(event.target.value);
    }
    const sendData=()=>{
        router.push(
            {
                pathname:'/more',
                query:{search}
            }
        )
    }
    return (
        <div className='container text-center '>
            <div class="input-group">
                <div class="form-outline me-2">
                    <input type="search" id="form1" value={search} onChange={handelchange} class="form-control" />
                </div>
                <button onClick={sendData} type="button" class="btn btn-primary ">
                    Search
                </button>
            </div>
        </div>
    )
}