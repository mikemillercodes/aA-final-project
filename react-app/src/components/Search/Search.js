import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/all_tasks";
import { NavLink } from "react-router-dom";
import { searchQuery } from "../../store/all_tasks";
import './Search.css';
