import React, { Suspense, useEffect } from "react";
import {
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Card, Decorate, Post } from "../content";

const Front = React.lazy(() => import("../front"));

export default function Router(props) {
  return (
    <Routes>
      <Route path="/" element={<><Outlet /></>}>
        <Route index element={<Defrouter />} />
        <Route path="home" element={
          <Suspense fallback={<>Loading</>}>
            <Front type={"home"} table={props.table}/>
          </Suspense>
        }>
          <Route index element={<Decorate><Card /></Decorate>} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="project" element={
          <Suspense fallback={<>Loading</>}>
            <Front type={"project"} table={props.table}/>
          </Suspense>
        }>
          <Route index element={<Decorate><Card /></Decorate>} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="api" element={
          <Suspense fallback={<>Loading</>}>
            <Front type={"api"} table={props.table}/>
          </Suspense>
        }>
          <Route index element={<Decorate><Card /></Decorate>} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="*" element={
          <Suspense fallback={<>Loading</>}>
            <Front type={"nomatch"} />
          </Suspense>
        } />
      </Route>
    </Routes>
  );
};

function Defrouter() {
  return (
    <Navigate to="/home" />
  );
}