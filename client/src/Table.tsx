import { useState, useEffect } from 'react';
import axios from 'axios'

interface Ticket {
  id: string;
  customerName: string;
  email: string;
  status: string;
  notes: string;
}

const Table = () => {

  const [data, setData] = useState<Ticket[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/tickets');
      setData(response.data);
    } catch (error) {
      return `Error finding data: ${error}`
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Notes</th>
            <th scope="col" className="px-6 py-3">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
          {data?.map((ticket: Ticket) => {
            return (
              <tr key={ticket.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4">{ticket.id}</td>
                <td className="px-6 py-4">{ticket.customerName}</td>
                <td className="px-6 py-4">{ticket.email}</td>
                <td className="px-6 py-4">{ticket.status}</td>
                <td className="px-6 py-4">{ticket.notes}</td>
                <td className="px-6 py-4">
                  <a href={`/ticket/${ticket.id}`}>
                    <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                      View
                    </button>
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table;