import React from "react";
import "./app.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { createStore } from "redux";
import { Provider } from "react-redux";
import {Header, About, Work, AddProject, Project, Edit} from "./components/index"
import {data} from "./constants/data";
function App() {
    const int_store =  data;
    function reducer(store=int_store, action) {
        switch (action.type) {
            case 'edit': return ({
                works: store.works.map((work, index)=>{
                    if (index === action.payload.inx) {
                        return(action.payload.dt) 
                    } else {
                        return work
                    }
                }),
                about: store.about,
            });
            default: return(store);
        }
    }

    const store = createStore(reducer);
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Header />
                    }
                > 
                    <Route index element={
                        <Provider store={store}>
                            <Work />
                        </Provider>
                    } />
                    <Route path="about" element={
                        <About />
                    } />
                </Route>
                <Route path="add_project" element={
                    <Provider store={store}>
                        <AddProject />
                    </Provider>
                } />
                <Route path="works/:projectId" element={
                    <Provider store={store}>
                        <Project />
                    </Provider>
                }/>
                <Route path="/edit/:editId" element={
                                        <Provider store={store}>
                                            <Edit />
                                        </Provider>} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;