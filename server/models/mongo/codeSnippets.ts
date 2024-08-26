import mongoose, { Document, Schema } from "mongoose";
interface ICodeSnippet extends Document {
  title: string;
  language: string;
  code: string;
  tags?: string[];
  created_at: Date;
  updated_at: Date;
  user_id: mongoose.Types.ObjectId;
}

const CodeSnippetSchema: Schema<ICodeSnippet> = new Schema({
  title: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const CodeSnippet = mongoose.model<ICodeSnippet>(
  "CodeSnippet",
  CodeSnippetSchema
);

export default CodeSnippet;
