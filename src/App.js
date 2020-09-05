import React from "react";
import {BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import StreamShow from "./components/streams/streamShow";
import StreamList from "./components/streams/streamList";
import StreamCreate from "./components/streams/streamCreate";
import StreamEdit from "./components/streams/streamEdit";
import StreamDelete from "./components/streams/streamDelete";

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Header />
               <Route exact path="/" component={StreamList} />
               <Route exact path="/streams/new" component={StreamCreate} />
               <Route exact path="/streams/edit" component={StreamEdit} />
               <Route exact path="/streams/delete" component={StreamDelete} />
               <Route exact path="/streams/show" component={StreamShow} />
            </div> 
            </BrowserRouter>
            
        </div>
    )
}


export default App;