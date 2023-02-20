import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/all_tasks";
import { NavLink } from "react-router-dom";
import NavBar from "../Navigation/NavBar";
import { searchQuery } from "../../store/all_tasks";
import './Search.css';

export default function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const dispatch = useDispatch();

    const tasks = useSelector((state) => Object.values(state.tasks));

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSearchResults(await dispatch(searchQuery(searchValue)).query);
        setTimeout(() => setSubmitted(true), 300);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };

    return (
        <div>
      <NavBar />
      <div className="search-container">
        <div className="search-area">
          <div className="search-form">
            <p className="search-title">Search for something on Taskly.</p>
            <div className="search-field">
              <label className="searchbar-search">Search</label>
              <input
                onKeyPress={(e) => handleKeyPress(e)}
                className="searchbar"
                placeholder="Enter a search term."
                type="text"
                onChange={handleChange}
                value={searchValue}
              />
            </div>
            <button className="submit-search" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div className="search-results">
          {submitted ? (
            Object.keys(tasks).length > 0 ? (
              tasks.map((task) => (
                <div className="search-result">
                  <NavLink to={`/tasks/${task.id}`}>
                    <img
                      src={task.task_img_url}
                      alt="search-result-product"
                    />
                  </NavLink>
                  <div className="search-result-details">
                    <NavLink to={`/tasks/${task.id}`}>
                      {task.title}
                    </NavLink>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">No search results found.</div>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>

    )
}
