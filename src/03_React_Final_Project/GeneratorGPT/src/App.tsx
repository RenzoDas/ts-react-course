import { Button } from "@components/atoms/Button/Button"
import "./App.css"
import { Text } from "@components/atoms/Text/Text"
import { Card } from "@components/molecules/Card/Card"

function App() {
  return (
    <>
      <div className="bg-primary-500 py-10 rounded-xl font-bold text-white shadowLg">
        <Text
          variant="h-xl"
          color={["text-primary-700"]}
          style={["cursor-pointer"]}
        >
          Design System
        </Text>
      </div>
      <div className="flex gap-2 pt-10 pb-2">
        <Text variant="h-sm" color={["text-primary-900"]}>
          Buttons
        </Text>
      </div>
      <hr />
      <div className="flex gap-2 pt-6 justify-center">
        <Button
          onClick={() => console.log("Clicked Button 1!")}
          variant="b-primary-outline-lg"
          label="Primary"
          icon="arrows-maximize"
        />
        <Button
          onClick={() => console.log("Clicked Button 2!")}
          variant="b-primary-lg"
          label="Primary"
          icon="arrows-maximize"
        />
        <Button
          onClick={() => console.log("Clicked Button 3!")}
          variant="b-secondary-outline-lg"
          label="Secondary Border"
          icon="arrows-maximize"
        />
        <Button
          onClick={() => console.log("Clicked Button 4!")}
          variant="b-secondary-lg"
          label="Secondary"
          icon="arrows-maximize"
        />
        <Button
          onClick={() => console.log("Clicked Button 4!")}
          variant="b-transparent-dark-lg"
          label="Secondary"
          icon="arrows-maximize"
        />
      </div>
      <div className="flex gap-2 pt-6 justify-center">
        <Button
          onClick={() => console.log("Clicked Button 1!")}
          variant="b-primary-outline-md"
          label="Primary Border"
          icon="arrows-maximize"
        />
        <Button
          onClick={() => console.log("Clicked Button 2!")}
          variant="b-primary-md"
          label="Primary"
          icon="arrows-maximize"
        />
        <Button
          onClick={() => console.log("Clicked Button 3!")}
          variant="b-secondary-outline-md"
          label="Secondary Border"
          icon="arrows-maximize"
        />
        <Button
          onClick={() => console.log("Clicked Button 4!")}
          variant="b-secondary-md"
          label="Secondary"
          icon="arrows-maximize"
        />
        <Button
          onClick={() => console.log("Clicked Button 4!")}
          variant="b-transparent-dark-md"
          label="Secondary"
          icon="arrows-maximize"
        />
      </div>
      <div className="flex gap-2 pt-6 justify-center">
        <Button
          onClick={() => console.log("Clicked Button 1!")}
          variant="b-primary-outline-sm"
          label="Primary Border"
          icon="arrows-maximize"
        />
        <Button
          onClick={() => console.log("Clicked Button 2!")}
          variant="b-primary-sm"
          label="Primary"
          icon="arrows-maximize"
        />
        <Button
          onClick={() => console.log("Clicked Button 3!")}
          variant="b-secondary-outline-sm"
          label="Secondary Border"
          icon="arrows-maximize"
        />
        <Button
          onClick={() => console.log("Clicked Button 4!")}
          variant="b-secondary-sm"
          label="Secondary"
          icon="arrows-maximize"
        />
        <Button
          onClick={() => console.log("Clicked Button 4!")}
          variant="b-transparent-dark-sm"
          label="Secondary"
          icon="arrows-maximize"
        />
      </div>
      <div className="flex gap-2 pt-6 justify-center">
        <Button
          onClick={() => console.log("Clicked Button 1!")}
          variant="b-primary-outline-lg"
          icon="arrows-maximize"
          square
        />
        <Button
          onClick={() => console.log("Clicked Button 2!")}
          variant="b-primary-lg"
          icon="arrows-maximize"
        />
        <Button
          onClick={() => console.log("Clicked Button 3!")}
          variant="b-secondary-outline-lg"
          icon="arrows-maximize"
          square
        />
        <Button
          onClick={() => console.log("Clicked Button 4!")}
          variant="b-secondary-lg"
          icon="arrows-maximize"
          square
        />
        <Button
          onClick={() => alert("Clicked Button 4!")}
          variant="b-transparent-dark-lg"
          icon="arrows-maximize"
          square
        />
      </div>
      <div className="flex gap-2 pt-10 pb-2">
        <Text variant="h-sm" color={["text-primary-900"]}>
          Cards
        </Text>
      </div>
      <hr />
      <div className="pt-8 flex justify-center">
        <Card
          variant="CardProfile"
          title="Welcome,"
          subtitle="Pesciolino rosso"
          imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </>
  )
}

export default App
