import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import TestE from "@/pages/TestEcharts/index"
import TestEcharts from '@/pages/TestEchartsM/index';
function Routing() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/register/*" element={<Register />} />
      <Route path="/testE"  element={<TestE />} />
      <Route path="/testEchartsM" element={<TestEcharts />} />
    </Routes>
  );
}

export default Routing;
