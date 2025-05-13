/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

interface Ticket {
  id: number;
  customerName: string;
  email: string;
  status: string;
  notes: string;
};

const Form = () => {
  const { id } = useParams();
  const [data, setData] = useState<Ticket[]>([]);
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/tickets/${id}`);
      setData(response.data);
    } catch (error) {
      return `Error finding data: ${error}`
    }
  };

  const saveData = async () => {
    try {
      const response = await axios.patch(`http://localhost:3000/tickets/${id}`, {
        status: status ? status : data.status,
        notes: notes ? notes : data.notes
      });

      return response
    } catch (error) {
      return `Error finding data: ${error}`
    }
  }

  const handleStatusChange = (event: any) => {
    setStatus(event.target.value);
  };

  const handleNotesChange = (event: any) => {
    setNotes(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form className='max-w-sm mx-auto'>
      <div className='mb-5'>
        <label htmlFor="fname" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>ID</label>
        <input disabled placeholder={`${data.id}`} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className='mb-5'>
        <label htmlFor="fname" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Customer Name</label>
        <input disabled placeholder={`${data.customerName}`} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className='mb-5'>
        <label htmlFor="fname" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
        <input disabled placeholder={`${data.email}`} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className='mb-5'>
        <label htmlFor="fname" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Status</label>
        <input placeholder={`${data.status}`} onChange={handleStatusChange} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className='mb-5'>
        <label htmlFor="fname" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Notes</label>
        <input placeholder={`${data.notes}`} onChange={handleNotesChange} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div onClick={saveData} type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
        Save
      </div>
      <br />
      <a href={'/'}>
        <div className="text-white danger hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">Cancel</div>
      </a>
    </form>
  )
};

export default Form;