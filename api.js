const API = "https://backendmxn.onrender.com";

export const deleteTask = async (id) => {
  await fetch(`${API}/tasks/${id}`, {
    method: "DELETE",
  });
};


export const getTasks = async () => {
  
  const res = await fetch(`${API}/tasks`, {
    method: "GET",
  });
  return await res.json();
};

export const saveTask = async (newTask) => {
  const res = await fetch(`${API}/tasks`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    
    body: 
    
    JSON.stringify(newTask),
  });
  return await res.json();
};

export const getTask = async (taskId) => {
  const res = await fetch(`${API}/tasks/${taskId}`);
  return await res.json();
};

export const updateTask = async (taskId, newTask) => {
  const res = await fetch(`${API}/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return res;
};
