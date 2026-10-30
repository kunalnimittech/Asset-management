export function notFound(req, res, next) {
  return res.status(404).json({
    error: { message: "Not Found" },
  });
}
