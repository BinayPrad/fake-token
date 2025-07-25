const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint for health check
app.get('/', (req, res) => {
  res.send('🟢 Token server is live. Use /fake-token to retrieve a static access token.');
});

// /fake-token endpoint used by Adobe Journey Optimizer
app.get('/fake-token', (req, res) => {
  res.json({
    access_token: "Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE3NTIzMDkxOTE3ODVfNDMzN2IzMjAtNjBkOC00MTcyLWJmZGQtMmE2OGZjOGE1MTgyX3VlMSIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJkZXYtY29uc29sZS1wcm9kIiwidXNlcl9pZCI6IjkzMzIxRjVENjMxQ0E5RDUwQTQ5NUU1RkA4MWY4MWY3NzYzMWMwNDgyNDk1YzUwLmUiLCJzdGF0ZSI6IjFubHZUVmZQQUdQOHhaMzVEYlFPd0JQeCIsImFzIjoiaW1zLW5hMSIsImFhX2lkIjoiMkQwQzE3M0U2MEMwQzI5QTBBNDk1QzBBQEFkb2JlSUQiLCJjdHAiOjAsImZnIjoiWlRRV0JRWTZYUFA3TUhXS0hPUVYyWEFBVkUiLCJzaWQiOiIxNzUyMDg2ODUxMTEyXzdmYThmZjdjLTFlYTctNDMxMC04NTRmLTA1MjVjMTk1MzE3M191dzIiLCJydGlkIjoiMTc1MjMwOTE5MTc4Nl9iODhkZmVkOS1kNzk1LTRmNTMtOTAwOC04NDAyZWJlMzFlNGFfdWUxIiwibW9pIjoiODUzNmI2MzEiLCJwYmEiOiJNZWRTZWNOb0VWLExvd1NlYyIsInJ0ZWEiOiIxNzUzNTE4NzkxNzg2IiwiZXhwaXJlc19pbiI6Ijg2NDAwMDAwIiwic2NvcGUiOiJBZG9iZUlELG9wZW5pZCxyZWFkX29yZ2FuaXphdGlvbnMsYWRkaXRpb25hbF9pbmZvLnByb2plY3RlZFByb2R1Y3RDb250ZXh0LGFkZGl0aW9uYWxfaW5mby5yb2xlcyIsImNyZWF0ZWRfYXQiOiIxNzUyMzA5MTkxNzg1In0.bwSS9JWxGAW4NFz5p_i_HZB8PksZUwcmtOXKN4yLE26oWB06nKmBBAlmJsP0u9HEMzPkyyrKwAgT2zoMWrp_jMVOZg7Wz7q3cnIQeOud_1bxGLEOmRsuVNKES1G8jq6Av2x-isF3GSRFun23lC3bRC_INjFR6LMV3PjoQEoRdTmmwscUktRqBglnRmqT-GxIovBPmqZ1XDya5Bb1MYuL_zcbsY7-nHVI32B-j_G3D1Uq2K3lMuMFLLSwge1rLpdyyaaBPIjfgX7o9RpiqbzclKxAF3BuRmRiNKQG9njRcAEwb1qzbSSVHVRe8dnkK12K23j3AFDllAPq5uMc9xD9Pg"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Token API server is running at http://localhost:${PORT}`);
});
