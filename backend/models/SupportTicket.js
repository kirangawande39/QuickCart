const mongoose=require('mongoose');

const supportTicketSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  subject: String,
  message: String,
  status: { type: String, enum: ["Open", "Closed"], default: "Open" },
  replies: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      message: String,
      createdAt: { type: Date, default: Date.now }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("SupportTicket", supportTicketSchema);

