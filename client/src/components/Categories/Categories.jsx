import React from 'react'
import {Link} from "react-router-dom"
import "./Categories.scss";
import useFetch from '../../hooks/useFetch';

const Categories = () => {
    const {data,loading,error} = useFetch(`/categories?populate=*`);
    console.log(data)
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
            <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
                <button>
                    <Link className="link" to="products/4">Sale</Link>
                </button>
            </div>
            
            <div className="row">
            <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
                <button>
                    <Link className="link" to="products/1">Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
                <button>
                    <Link className="link" to="products/5">New Season</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
                <button>
                    <Link className="link" to="products/2">Men</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
                <button>
                    <Link className="link" to="products/6">Accessories</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row"> 
            <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
                <button>
                    <Link className="link" to="products/3">Shoes</Link>
                </button></div>
        </div>
    </div>
  )
}

export default Categories