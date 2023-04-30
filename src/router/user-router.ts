import * as express from "express";
import { handler } from "@/router/utils";

const router = express.Router();


router.get('/', handler(async (req, res) => {
  res.send('hello world!');
}));

router.get('/debug', handler(async (req, res) => {
  res.json({
    headers: req.headers,
    method: req.method,
    path: req.path,
    queries: req.query,
    body: req.body,
    params: req.params,
  });
}));

// 회중 목록 조회 (Validation)
router.get('/api/congregation', handler(async (req, res) => {
  res.json({
    headers: req.headers,
    method: req.method,
    path: req.path,
    queries: req.query,
    body: req.body,
    params: req.params,
  });
}));

// 참여자 등록
router.post('/api/attendance', handler(async (req, res) => {
  res.json({
    headers: req.headers,
    method: req.method,
    path: req.path,
    queries: req.query,
    body: req.body,
    params: req.params,
  });
}));

// 참여자 수정
router.put('/api/attendance', handler(async (req, res) => {
  res.json({
    headers: req.headers,
    method: req.method,
    path: req.path,
    queries: req.query,
    body: req.body,
    params: req.params,
  });
}));

// 스캔 여부 등록
router.post('/api/attendance-scan', handler(async (req, res) => {
  res.json({
    headers: req.headers,
    method: req.method,
    path: req.path,
    queries: req.query,
    body: req.body,
    params: req.params,
  });
}));
export default router;
