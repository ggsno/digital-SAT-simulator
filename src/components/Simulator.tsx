import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { GraphingCalculator } from "desmos-react";
import Question from "./Simulator.Question";
import Footer from "./Simulator.Footer";
import Header from "./Simulator.Header";
import {
  isCalulatorOpenedState,
  questionIndexState,
  examState,
  answerState,
} from "./Simulator.atoms";
import Review from "./Simulator.Review";

export default function Simulator() {
  const isCalculatorOpen = useRecoilValue(isCalulatorOpenedState);
  const exam = useRecoilValue(examState);
  const setAnswer = useSetRecoilState(answerState);
  if (!exam) throw new Error("no exam state");
  const totalQuestionCount = exam?.modules.length;
  const { title, modules } = exam;
  const questionIndex = useRecoilValue(questionIndexState);

  const userName = "Gildong Hong";

  useEffect(() => {
    setAnswer(Array(modules.length).fill(null));
  }, [exam]);

  return (
    <>
      <GraphingCalculator
        attributes={{
          className: `calculator fixed top-20 left-0 h-[80vh] w-full ${
            isCalculatorOpen ? "block" : "hidden"
          }
      `,
        }}
      />
      <Header title={title} />
      <hr className="border-dashed border-t-2 border-gray mb-2" />
      {questionIndex < modules.length ? (
        <Question
          passage={modules[questionIndex].passage}
          question={modules[questionIndex].question}
          choices={modules[questionIndex].choices}
        />
      ) : (
        <Review />
      )}
      <Footer userName={userName} totalQuestionCount={totalQuestionCount} />
    </>
  );
}
