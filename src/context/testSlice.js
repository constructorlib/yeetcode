import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { boy1, boy3, boy4, boy5, girl2 } from "assets/icons/";

const questionList = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    answer: "Paris",
    icon: boy1,
  },
  {
    id: 2,
    question: "Who is CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
    answer: "Elon Musk",
    icon: boy3,
  },
  {
    id: 3,
    question: "The iPhone was created by which company?",
    options: ["Apple", "Intel", "Amazon", "Microsoft"],
    answer: "Apple",
    icon: boy4,
  },
  {
    id: 4,
    question: "How many Harry Potter books are there?",
    options: ["1", "4", "6", "7"],
    answer: "7",
    icon: boy5,
  },
  {
    id: 5,
    question: "Where is Palestine located on the map, and what countries surround it",
    options: ["Europe", "South America", "Middle East", "Africa"],
    answer: "Middle East",
    icon: girl2,
  },
];

export const testSlice = createSlice({
  name: "test",
  initialState: {
    questionList,
    currentQuestion: 0,
    wrongQuestionList: [],
    end: false,
    score: 0,
    isCorrect: null,
  },
  reducers: {
    start(state, action) {
      state.questionList = action.payload;
    },
    stop(state) {
      state.questionList = questionList;
      state.currentQuestion = 0;
      state.wrongQuestionList = [];
      state.end = false;
      state.score = 0;
      state.isCorrect = null;
    },
    next(state) {
      if (state.currentQuestion === state.questionList.length - 1) {
        state.end = true;
        return;
      }

      state.currentQuestion++;
      state.isCorrect = null;
    },

    check(state, action) {
      const { currentQuestion, questionList } = state;
      const correctAnswer = questionList[currentQuestion].answer;
      if (action.payload === correctAnswer) {
        state.score++;
        state.isCorrect = true;
      } else {
        state.isCorrect = false;
        state.wrongQuestionList = [...state.wrongQuestionList, currentQuestion];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { start, stop, next, check } = testSlice.actions;

export default testSlice.reducer;
