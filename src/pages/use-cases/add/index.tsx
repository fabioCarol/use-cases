import { FormEvent } from "react";

export default function UseCasesAdd() {
    /**
     * @todo figure out a better way to submit form
     */
    async function handleSubmit(e:FormEvent) {
        e.preventDefault() // stops page from change
        const target:HTMLFormElement = e.target as HTMLFormElement
        const response = await fetch(target.action, {
            method: target.method,
            body: JSON.stringify(Object.fromEntries( new FormData(target).entries())),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        console.log(response)

    }
    return  (
        <main>
            <h1>Add a use case</h1>
            <form action="/api/use-cases" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                id="title"
                name="title"
            />
            <br />
            <button type="submit">Submit</button>
            </form>
        </main>
        
    )
  }
  