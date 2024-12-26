import { addTodo, getTodos } from "@/actions";
import ClientButton from "@/components/client-button";
import SubmitButton from "@/components/submit-button";
import SubmitForm from "@/components/submit-form";

export default async function Page() {
  const todos = await getTodos();
  return (
    <div className="p-10">
      <SubmitForm/>
      <ul className="leading-8 mt-4">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
