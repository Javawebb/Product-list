import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct } from '../redux/productSlicer'

export const Form = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
        if (!value.trim()) return

        const todo = {
            id:Date.now(),
            title:value,
            completed:false,
        }
        dispatch(createProduct(todo))
    }
    return (
        <form onSubmit={submitHandler} className='h-screen p-10 w-3/12  bg-slate-800 flex items-center justify-center'>
            <div className="w-5/6 bg-white h-4/6 m-auto rounded-lg p-5">
                <h1 className='my-10 text-xl flex ml-20'>ADD PRODUCT</h1>
                <input type="text" placeholder="P-Name" class="input input-bordered input-accent w-72" />
                <input type="text" placeholder="P-Price" class="my-10 input input-bordered input-accent w-72" />
                <select class="select select-accent w-72 mb-10">
                    <option disabled selected>Category</option>
                    <option>Phone</option>
                    <option>Laptop</option>
                    <option>Computer</option>
                </select>
                <textarea class="textarea textarea-accent w-72 max-h-32" placeholder="P-Desc"></textarea>
                <button class="mt-10 btn btn-success flex items-center justify-center p-5 w-full">Add</button>
            </div>
        </form>
    )
}
