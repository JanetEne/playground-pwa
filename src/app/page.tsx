'use client';

// import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

// interface FormValues {
//   title: string;
//   description: string;
//   date: Date
// }

export default function Home() {
  // const [formValues, setFormValues] = useState<FormValues>()
  // const date = new Date()
  // const [loading, setLoading] = useState<boolean>(false)
  // const [postForm, setPostForm] = useState<FormValues[]>([])

  // const submit = () => {

  //   setLoading(true)
  //   if (!formValues?.title) {
  //     alert('Please enter a title')
  //     return
  //   }
  //   if (!formValues?.description) {
  //     alert('Please enter a content')
  //     return
  //   }

  //   const data = { ...formValues, date }

  //   setPostForm([...postForm, data])

  //   setLoading(false)
  //   setFormValues({ title: '', description: '', date: new Date() })

  // }

  const content = `# Heading 1
  This is a paragraph under Heading 1. You can add bold text, *italic text*, or even strikethrough text.
  
  ## Heading 2
  This is a paragraph under Heading 2. You can also add inline code or links like [Tailwind CSS](https://tailwindcss.com).
  
  ### Heading 3
  This is a paragraph under Heading 3. Here's a list:
  - Item 1
  - Item 2
  - Item 3
  
  #### Heading 4
  This is a paragraph under Heading 4. Here's an ordered list:
  1. First item
  2. Second item
  3. Third item
  
  ##### Heading 5
  This is a paragraph under Heading 5. You can also add blockquotes:
  
  > This is a blockquote. It can span multiple lines.
  
  ###### Heading 6
  This is a paragraph under Heading 6. You can add code blocks:
  
  \`\`\`javascript
  function greet(name) {
    console.log(\`Hello, \${name}!\`);
  }
  \`\`\`
  `;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[500px] bg-gray-100 rounded shadow p-6">
        <div className="prose">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        {/* <form onSubmit={(e) => { e.preventDefault(); submit() }} className="flex flex-col gap-5">
          <div>
            <p>
              Title
            </p>
            <input placeholder="Enter title" className="w-full px-4 py-2 rounded-md" value={formValues?.title} onChange={(e) => setFormValues({ ...formValues!, title: e.target.value })} required />
          </div>
          <div>
            <p>
              Description
            </p>
            <textarea placeholder="Enter description" className="w-full px-4 py-2 rounded-md" value={formValues?.description} onChange={(e) => setFormValues({ ...formValues!, description: e.target.value })} required />
          </div>

          <div className="flex justify-center items-center">
            <button className="bg-green-500 w-fit px-8 py-2 rounded-md" type="submit">{loading ? 'Loading' : 'Submit'} </button>

          </div>
        </form>


        <div className="flex gap-2 mt-10 flex-wrap">
          {postForm.map((item, index) => (
            <div className="border p-2 shadow rounded-md border-gray-200 relative">
              <p>{item.title}</p>
              <p>{item.description}</p>

              <div className="absolute top-0 right-1 cursor-pointer text-red-500" onClick={() => setPostForm(postForm?.filter((item, itemIndex) => index !== itemIndex))}>x</div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
