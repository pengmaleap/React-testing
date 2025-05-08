import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { BsPencil, BsTrash } from "react-icons/bs";


export const CardList = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Tree Guide",
      description: "Learn about different trees",
      image:
        "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Tree",
      description: "Learn about different trees",
      image:
        "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
    },
  ]);
  interface User {
    id: number;
    username: string;
    email: string;
    address: {
      city: string;
    };
  }

  const [user, setUser] = useState<User[]>([]);

  const fetchdata = async () => {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await result.json();
      console.log("response:", response);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  const addCard = (newCard) => {
    setCards([...cards, { ...newCard, id: Date.now() }]);
  };

  const updateCard = (id, updatedCard) => {
    setCards(cards.map((card) => (card.id === id ? updatedCard : card)));
  };

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
     <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {user.map((card) => (
          <div key={card.id} className="space-y-2">
            <Card
              id={card.id}
              city={card.address.city}
              username={card}
              email={card.email} title={undefined} />
            <div className="flex gap-2">
              {/* <button
                onClick={() =>
                  updateCard(card.id, { ...card, title: card.title + " Updated" })
                }
                className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
              >
                <BsPencil /> Edit
              </button> */}
              <button
                onClick={() => deleteCard(card.id)}
                className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                <BsTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 

