// @ts-nocheck
import React, { Suspense, lazy } from "react";
import { useMemo, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { router } from "@/router";
import Loadding from "@/components/loadding";
import Index from "@/pages/index";
import Home from "@/pages/expenses";
import Login from "@/pages/login";
import "@/App.css";
function App({ token }) {
  const [routerList, setRouterList] = useState([]);
  async function getRouter() {
    const resp = await fetch("http://localhost:3000/routerList");
    const result = await resp.json();
    const routerlist = result.map((item) => {
      return {
        ...item,
        path: item.path.replace("/index/", ""),
        element: router[item.name],
      };
    });
    setRouterList(routerlist);
  }
  useEffect(() => {
    getRouter();
  }, []);
  const isLogin = useMemo(() => !!token, [token]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/index/home" />}></Route>
        <Route path="/index" element={<Index />}>
          <Route path="home" index element={<Home />}></Route>
          {routerList.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={
                  !item.auth || (item.auth && isLogin) ? (
                    <Suspense fallback={<Loadding />}>
                      <item.element />
                    </Suspense>
                  ) : (
                    <Suspense fallback={<Loadding />}>
                      <Navigate to={`/login?url=/index/${item.path}`} />
                    </Suspense>
                  )
                }
              />
            );
          })}
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token,
  };
};
// 操作共享的数据
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
