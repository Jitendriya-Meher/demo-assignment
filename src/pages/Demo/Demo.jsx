import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Demo.css'
import { Link } from 'react-router-dom';

const Demo = () => {

    const [users,setUsers] = useState([]);
    const [tickets,setTickets] = useState([]);
    
    async function getDatas(){
        try{
            const api = 'https://api.quicksell.co/v1/internal/frontend-assignment';
            const res = await axios.get(api);
            const data = await res.data;
            console.log(data);
            setUsers(data.users);
            setTickets(data.tickets);
        }
        catch(err){
            console.log(err);
        }
    }

    const countCategories = (arr,key) => {
        let count = 0;
      
        arr.forEach(item => {
          // If the item exists in the object, increment its count
          if (item.status == key) {
            count++;
          }
        });
      
        return count;
      };

    const [show,setShow] = useState(false);

    useEffect(() => {
        getDatas();
    },[]);

  return (
<div class="bg-gray-100 home">
    <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="w-full max-w-6xl bg-white shadow-md rounded-lg">
            <div class="flex justify-between items-center p-4 border-b">
                <div class="flex items-center space-x-2">
                    <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md p-1"
                    onClick={()=>{
                        setShow((prev) => (!prev))
                    }}
                    >Display</button>

                    {
                        show && <div class="relative">
                        <div class="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                        <div class="p-2">
                                <Link to={"/dm"}>
                                    <button class="w-full text-left px-3 py-1 hover:bg-gray-100">Status</button>
                                </Link>
                                <Link to="/pr">
                                    <button class="w-full text-left px-3 py-1 hover:bg-gray-100">Priority</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    }
                </div>


                <div class="flex items-center space-x-2">
                    <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">+</button>
                </div>
            </div>
            <div class="flex p-4 space-x-4 overflow-x-auto">
            <div class="w-1-5">
            <div class="flex justify-between items-center mb-2 p-1">
                        <div className="flex gap-4 items-center">
                            <img src="assets/Backlog.svg" alt="" />
                            <h2 class="text-lg font-semibold">Backlogs</h2>
                            <span class="bg-blue-200 text-blue-700 px-2 py-1 rounded-full spanRound ">
                                        {
                                            countCategories(tickets,"Backlogs")
                                        }
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <img src="assets/add.svg" alt="" />
                            <img src="assets/3 dot menu.svg" alt="" />
                        </div>
                    </div>
                    <div class="space-y-4">
                        {
                            tickets.filter((tic)=>(tic.status == "Backlog")).map((tic,i) => (
                                <div class="bg-white p-4 rounded-lg shadow-md" key={i}>
                                    <div className="">
                                    <div className="flex justify-between items-center">
                                            <h3 class="font-semibold">
                                                {tic.id}
                                            </h3>
                                            <div className="">
                                                <img src="userlogo.jpg" alt="" width={40} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='flex'>
                                        <div className="p-1">
                                            {
                                                tickets.status == "In progress" ? <img src="assets/in-progress.svg" alt="" /> : <img src="assets/To-do.svg" alt="" />
                                            }
                                        </div>
                                        <p className=''>
                                            {tic.title}
                                        </p>
                                    </p>
                                    <p class="text-gray-500 text-sm p-1 mt1">{tic.tag[0]}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div class="w-1-5">
                <div class="flex justify-between items-center mb-2 p-1">
                        <div className="flex gap-4 items-center">
                            <img src="assets/To-do.svg" alt="" />
                            <h2 class="text-lg font-semibold">Todo</h2>
                            <span class="bg-blue-200 text-blue-700 px-2 py-1 rounded-full spanRound ">
                                        {
                                            countCategories(tickets,"Todo")
                                        }
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <img src="assets/add.svg" alt="" />
                            <img src="assets/3 dot menu.svg" alt="" />
                        </div>
                    </div>
                    <div class="space-y-4">
                        {
                            tickets.filter((tic)=>(tic.status == "Todo")).map((tic,i) => (
                                <div class="bg-white p-4 rounded-lg shadow-md" key={i}>
                                    <div className="">
                                    <div className="flex justify-between items-center">
                                            <h3 class="font-semibold">
                                                {tic.id}
                                            </h3>
                                            <div className="">
                                                <img src="userlogo.jpg" alt="" width={40} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='flex'>
                                        <div className="p-1">
                                            {
                                                tickets.status == "In progress" ? <img src="assets/in-progress.svg" alt="" /> : <img src="assets/To-do.svg" alt="" />
                                            }
                                        </div>
                                        <p className=''>
                                            {tic.title}
                                        </p>
                                    </p>
                                    <p class="text-gray-500 text-sm p-1 mt1">{tic.tag[0]}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div class="w-1-5">
                <div class="flex justify-between items-center mb-2 p-1">
                        <div className="flex gap-4 items-center">
                            <img src="assets/in-progress.svg" alt="" />
                            <h2 class="text-lg font-semibold">In progress</h2>
                            <span class="bg-blue-200 text-blue-700 px-2 py-1 rounded-full spanRound ">
                                        {
                                            countCategories(tickets,"In progress")
                                        }
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <img src="assets/add.svg" alt="" />
                            <img src="assets/3 dot menu.svg" alt="" />
                        </div>
                    </div>
                    <div class="space-y-4">
                        {
                            tickets.filter((tic)=>(tic.status == "In progress")).map((tic,i) => (
                                <div class="bg-white p-4 rounded-lg shadow-md" key={i}>
                                    <div className="">
                                    <div className="flex justify-between items-center">
                                            <h3 class="font-semibold">
                                                {tic.id}
                                            </h3>
                                            <div className="">
                                                <img src="userlogo.jpg" alt="" width={40} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='flex'>
                                        <div className="p-1">
                                            {
                                                tickets.status == "In progress" ? <img src="assets/in-progress.svg" alt="" /> : <img src="assets/To-do.svg" alt="" />
                                            }
                                        </div>
                                        <p className=''>
                                            {tic.title}
                                        </p>
                                    </p>
                                    <p class="text-gray-500 text-sm p-1 mt1">{tic.tag[0]}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div class="w-1-5">
                <div class="flex justify-between items-center mb-2 p-1">
                        <div className="flex gap-4 items-center">
                            <img src="assets/Done.svg" alt="" />
                            <h2 class="text-lg font-semibold">Done</h2>
                            <span class="bg-blue-200 text-blue-700 px-2 py-1 rounded-full spanRound ">
                                        {
                                            countCategories(tickets,"Done")
                                        }
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <img src="assets/add.svg" alt="" />
                            <img src="assets/3 dot menu.svg" alt="" />
                        </div>
                    </div>
                    <div class="space-y-4">
                        {
                            tickets.filter((tic)=>(tic.status == "Done")).map((tic,i) => (
                                <div class="bg-white p-4 rounded-lg shadow-md" key={i}>
                                    <div className="">
                                    <div className="flex justify-between items-center">
                                            <h3 class="font-semibold">
                                                {tic.id}
                                            </h3>
                                            <div className="">
                                                <img src="userlogo.jpg" alt="" width={40} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='flex'>
                                        <div className="p-1">
                                            {
                                                tickets.status == "In progress" ? <img src="assets/in-progress.svg" alt="" /> : <img src="assets/To-do.svg" alt="" />
                                            }
                                        </div>
                                        <p className=''>
                                            {tic.title}
                                        </p>
                                    </p>
                                    <p class="text-gray-500 text-sm p-1 mt1">{tic.tag[0]}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div class="w-1-5">
                <div class="flex justify-between items-center mb-2 p-1">
                        <div className="flex gap-4 items-center">
                            <img src="assets/Cancelled.svg" alt="" />
                            <h2 class="text-lg font-semibold">Canceled</h2>
                            <span class="bg-blue-200 text-blue-700 px-2 py-1 rounded-full spanRound ">
                                        {
                                            countCategories(tickets,"Canceled")
                                        }
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <img src="assets/add.svg" alt="" />
                            <img src="assets/3 dot menu.svg" alt="" />
                        </div>
                    </div>
                    <div class="space-y-4">
                        {
                            tickets.filter((tic)=>(tic.status == "Cancel")).map((tic,i) => (
                                <div class="bg-white p-4 rounded-lg shadow-md" key={i}>
                                    <div className="">
                                    <div className="flex justify-between items-center">
                                            <h3 class="font-semibold">
                                                {tic.id}
                                            </h3>
                                            <div className="">
                                                <img src="userlogo.jpg" alt="" width={40} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='flex'>
                                        <div className="p-1">
                                            {
                                                tickets.status == "In progress" ? <img src="assets/in-progress.svg" alt="" /> : <img src="assets/To-do.svg" alt="" />
                                            }
                                        </div>
                                        <p className=''>
                                            {tic.title}
                                        </p>
                                    </p>
                                    <p class="text-gray-500 text-sm p-1 mt1">{tic.tag[0]}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>



            </div>
        </div>
    </div>
</div>

  )
}

export default Demo