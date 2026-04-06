//
import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const userList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    });
    return () => unsubscribe();
  }, []);

  const addUser = async () => {
    if (!name || !age) return;

    await addDoc(collection(db, "users"), {
      name: name,
      age: Number(age),
    });

    setName("");
    setAge("");
  };

  const updateUser = async (id) => {
    const userRef = doc(db, "users", id);
    await updateDoc(userRef, {
      name: name,
      age: age || "Updated User",
    });
    (setName(""), setAge(""));
  };

  // ❌ DELETE
  const deleteUser = async (id) => {
    const userRef = doc(db, "users", id);
    await deleteDoc(userRef);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">🔥 Firebase CRUD</h1>

      {/* 🔥 INPUT SECTION */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />

        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-2 mr-2"
        />

        <button onClick={addUser} className="bg-green-500 text-white px-4 py-2">
          Add User
        </button>
      </div>

      {/* 🔥 DISPLAY DATA */}
      {users.map((user) => (
        <div key={user.id} className="border p-3 mb-2">
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>

          <button
            onClick={() => updateUser(user.id)}
            className="bg-yellow-500 text-white px-2 py-1 mr-2"
          >
            Update
          </button>

          <button
            onClick={() => deleteUser(user.id)}
            className="bg-red-500 text-white px-2 py-1"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default App;
