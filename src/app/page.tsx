'use client';

import { useState } from 'react';

interface FormValues {
  title: string;
  description: string;
  date: Date;
}

export default function Home() {
  const [formValues, setFormValues] = useState<FormValues>();
  const date = new Date();
  const [loading, setLoading] = useState<boolean>(false);
  const [postForm, setPostForm] = useState<FormValues[]>([]);

  const submit = () => {
    setLoading(true);
    if (!formValues?.title) {
      alert('Please enter a title');
      return;
    }
    if (!formValues?.description) {
      alert('Please enter a content');
      return;
    }

    const data = { ...formValues, date };

    setPostForm([...postForm, data]);

    setLoading(false);
    setFormValues({ title: '', description: '', date: new Date() });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[500px] bg-gray-100 rounded shadow p-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          className="flex flex-col gap-5"
        >
          <div>
            <p>Title</p>
            <input
              placeholder="Enter title"
              className="w-full px-4 py-2 rounded-md"
              value={formValues?.title}
              onChange={(e) =>
                setFormValues({ ...formValues!, title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <p>Content</p>
            <textarea
              placeholder="Enter content"
              className="w-full px-4 py-2 rounded-md"
              value={formValues?.description}
              onChange={(e) =>
                setFormValues({ ...formValues!, description: e.target.value })
              }
              required
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              className="bg-green-500 w-fit px-8 py-2 rounded-md"
              type="submit"
            >
              {loading ? 'Loading' : 'Submit'}{' '}
            </button>
          </div>
        </form>

        <div className="grid grid-cols-4 gap-2 mt-10 flex-wrap">
          {postForm.length > 0 ? (
            postForm.map((item, index) => (
              <div
                className="border w-[100px] p-2 shadow rounded-md border-gray-200 relative"
                key={index}
              >
                <p>{item.title}</p>
                <p>{item.description}</p>

                <div
                  className="absolute top-0 right-1 cursor-pointer text-red-500"
                  onClick={() =>
                    setPostForm(
                      postForm?.filter((_, itemIndex) => index !== itemIndex)
                    )
                  }
                >
                  x
                </div>
              </div>
            ))
          ) : (
            <p>No Posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
