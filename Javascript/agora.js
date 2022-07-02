//index.js
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const getPageStartEnd = (limit, page) => {
  const pageStart = Number(page - 1) * Number(limit);
  const pageEnd = Number(pageStart) + Number(limit);
  return { pageStart, pageEnd };
};

const handleRequestBody = (req, res) => {
  if (!req.body) return res.status(400).send("no request body");
  const { id, title, url, author, bodyHTML, avatarUrl } = req.body;
  if (!id && !title && !url && !author && !bodyHTML && !avatarUrl)
    return res.status(400).send("bad request");
  return true;
};

const discussionsController = {
  findAll: (req, res) => {
    const { limit, page } = req.query;

    let responseBody = discussionsData;
    if (!limit && !page) {
      return res.status(200).json(responseBody);
    }

    if (limit && page) {
      if (!Number(limit) || !Number(page)) return res.status(400).send();
      const { pageStart, pageEnd } = getPageStartEnd(limit, page);
      return res.status(200).json(responseBody.slice(pageStart, pageEnd));
    }

    if (limit) {
      // page가 없는 경우는 첫 페이지로 간주
      if (!Number(limit)) return res.status(400).send();
      const { pageStart, pageEnd } = getPageStartEnd(limit, 1);
      return res.status(200).json(responseBody.slice(pageStart, pageEnd));
    }

    if (page) {
      // limit가 없는 경우 한 페이지 당 10개로 간주
      if (!Number(page)) return res.status(400).send();
      const { pageStart, pageEnd } = getPageStartEnd(10, page);
      return res.status(200).json(responseBody.slice(pageStart, pageEnd));
    }

    return res.status(404).send("Not found");
  },

  findById: (req, res) => {
    const { id } = req.params;
    const found = discussionsData.find((d) => d.id === Number(id));
    if (found) {
      return res.status(200).json(found);
    } else {
      return res.status(404).send("Not found");
    }
  },

  createOne: (req, res) => {
    const { id, title, url, author, bodyHTML, avatarUrl } = req.body;
    if (handleRequestBody(req, res) !== true) return;
    const newDiscussion = {
      id,
      createdAt: new Date().toISOString(),
      title,
      url,
      author,
      answer: null,
      bodyHTML,
      avatarUrl,
    };
    discussionsData.push(newDiscussion);
    return res.status(201).send("resource created successfully: ID " + id);
  },

  updateById: (req, res) => {
    if (handleRequestBody(req, res) !== true) return;
    const idx = discussionsData.findIndex((d) => d.id === req.params.id);
    const updated = {
      ...discussionsData[idx],
      ...req.body,
      updatedAt: new Date().toISOString(),
    };

    if (idx !== -1) {
      discussionsData.splice(idx, 1, updated);
      return res.status(200).send("resource updated successfully");
    } else {
      return res.status(404).send("Not found");
    }
  },

  deleteById: (req, res) => {
    const idx = discussionsData.findIndex((d) => d.id === req.params.id);
    if (idx !== -1) {
      discussionsData.splice(idx, 1);
      return res.status(202).send("resource deleted successfully");
    } else {
      return res.status(404).send("Not found");
    }
  },
};

module.exports = {
  discussionsController,
};
//discussions.js
// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require("../controller");
const { findAll, findById, createOne, updateById, deleteById } =
  discussionsController;
const express = require("express");
const router = express.Router();

// TODO: 모든 discussion 목록을 조회하는 라우터를 작성합니다.
router.get("/", findAll);

// TODO: discussion 하나를 조회하는 라우터를 작성합니다.
router.get("/:id", findById);

// TODO: discussion 하나를 생성하는 라우터를 작성합니다.
router.post("/:id", createOne);

// TODO: discussion 하나를 수정하는 라우터를 작성합니다.
router.put("/:id", updateById);

// TODO: discussion 하나를 삭제하는 라우터를 작성합니다.
router.delete("/:id", deleteById);

module.exports = router;

//app.js
const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

// TODO: cors를 적용합니다.
app.use(cors());
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json());
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

const port = 3001;
const discussionsRouter = require("./router/discussions");

// TODO: /discussions 경로로 라우팅합니다.
app.use("/discussions", discussionsRouter);

app.get("/", (req, res) => {
  res.status(200).send("Welcome, My Agora States Server!");
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
