import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, set_length] = useState(8)
  const [number, set_number] = useState(false)
  const [character, set_character] = useState(false)
  const [password, set_password] = useState("")

  const password_reference = useRef(null)

  const copy_password_to_clipboard = useCallback(() => {
    password_reference.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const password_generator = useCallback(() => {
    let result = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(character) str += "!@#$%^&*()_+~`|}{[];?><,./-=:"

    for(let i = 0; i < length; i++) result += str.charAt(Math.floor(Math.random() * str.length))

    set_password(result)
  }, [length, number, character, set_password])

  useEffect(() => {password_generator()}, [length, number, character, password_generator])

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-2xl shadow-lg rounded-xl px-8 py-10 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-6 text-4xl font-bold">Password Generator</h1>
      <div className="flex shadow-lg rounded-lg overflow-hidden mb-8 bg-white">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-3 px-6 text-2xl"
          placeholder="Password"
          ref={password_reference}
          readOnly
        />
        <button
          className="outline-none bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 text-xl font-medium shrink-0"
          onClick={copy_password_to_clipboard}
        >
        Copy
        </button>
      </div>
      <div className="flex text-xl gap-x-6">
        <div className="flex items-center gap-x-3">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer w-48"
            onChange={(event) => { set_length(event.target.value) }}
          />
          <label className="text-white text-xl">Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            defaultChecked={number}
            className="cursor-pointer scale-150"
            onChange={() => { set_number(!number) }}
          />
          <label className="text-white text-xl">Numbers</label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            defaultChecked={character}
            className="cursor-pointer scale-150"
            onChange={() => { set_character(!character) }}
          />
          <label className="text-white text-xl">Characters</label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App