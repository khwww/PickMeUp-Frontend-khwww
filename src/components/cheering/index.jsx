import { useState, useOptimistic, useTransition } from 'react';
import CheerForm from './CheerForm';
import CheerList from './CheerList';
import CheerTitle from './CheerTitle';

const CheerSection = () => {
  const [messages, setMessages] = useState([]);
  const [, startTransition] = useTransition();

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (currentMessages, newMessage) => [{ ...newMessage, isPending: true }, ...currentMessages]
  );

  const handleAddMessage = async (newMessage, submitAction) => {
    startTransition(async () => {
      addOptimisticMessage(newMessage);

      await submitAction();
      setMessages((prev) => [newMessage, ...prev]);
    });
  };

  return (
    <div className="mw-1280 !mb-[72px] flex flex-col items-center md:!mb-52">
      <CheerTitle />
      <CheerForm onAddMessage={handleAddMessage} />
      <CheerList messages={optimisticMessages} setMessages={setMessages} />
    </div>
  );
};

export default CheerSection;
