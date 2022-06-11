const express = require("express");
const app = express();
const ExpressError = require("./expressError");

const { handleNums, findMean, findMedian, findMode } = require("./helper");

app.get('/mean', function (request, response, next) {
    debugger
  if (!request.query.nums) {
    throw new ExpressError("Nums must be provided", 400);
  }

  let nums = handleNums(request.query.nums);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  let result = {
    operation: "mean",
    value: findMean(nums),
  };

  return response.json(result);
});

app.get("/median", function (request, response, next) {
  if (!request.query.nums) {
    throw new ExpressError("Nums must be provided", 400);
  }

  let nums = handleNums(request.query.nums);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  let result = {
    operation: "median",
    value: findMedian(nums),
  };
  return response.json(result);
});

app.get("/mode", function (request, response, next) {
  if (!request.query.nums) {
    throw new ExpressError("Nums must be provided", 400);
  }

  let nums = handleNums(request.query.nums);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  let result = {
    operation: "mode",
    value: findMode(nums),
  };
  return response.json(result);
});

app.use(function (request, response, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError);
});

app.use(function (error, request, response, next) {
  let status = error.status || 500;
  let message = error.message;
  return response.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
