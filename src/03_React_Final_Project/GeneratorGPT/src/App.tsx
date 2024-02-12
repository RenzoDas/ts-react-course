import { Button } from "@components/atoms/Button/Button"
import "./App.css"
import { Text } from "@components/atoms/Text/Text"

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
          label="Primary Border"
          icon="arrows-maximize"
          iconPosition="right"
        />
        <Button
          onClick={() => console.log("Clicked Button 2!")}
          variant="b-primary-lg"
          label="Primary"
          icon="arrows-maximize"
          iconPosition="right"
        />
        <Button
          onClick={() => console.log("Clicked Button 3!")}
          variant="b-secondary-outline-lg"
          label="Secondary Border"
          icon="arrows-maximize"
          iconPosition="right"
        />
        <Button
          onClick={() => console.log("Clicked Button 4!")}
          variant="b-secondary-lg"
          label="Secondary"
          icon="arrows-maximize"
          iconPosition="right"
        />
        <Button
          onClick={() => console.log("Clicked Button 4!")}
          variant="b-transparent-dark-lg"
          label="Secondary"
          icon="arrows-maximize"
          iconPosition="right"
        />
      </div>
      <div className="flex gap-2 pt-6 justify-center">
        <Button
          onClick={() => console.log("Clicked Button 1!")}
          variant="b-primary-outline-md"
          label="Primary Border"
          icon="arrows-maximize"
          iconPosition="right"
        />
        <Button
          onClick={() => console.log("Clicked Button 2!")}
          variant="b-primary-md"
          label="Primary"
          icon="arrows-maximize"
          iconPosition="right"
        />
        <Button
          onClick={() => console.log("Clicked Button 3!")}
          variant="b-secondary-outline-md"
          label="Secondary Border"
          icon="arrows-maximize"
          iconPosition="right"
        />
        <Button
          onClick={() => console.log("Clicked Button 4!")}
          variant="b-secondary-md"
          label="Secondary"
          icon="arrows-maximize"
          iconPosition="right"
        />
        <Button
          onClick={() => console.log("Clicked Button 4!")}
          variant="b-transparent-dark-md"
          label="Secondary"
          icon="arrows-maximize"
          iconPosition="right"
        />
      </div>
      <div className="flex gap-2 pt-6 justify-center">
        <Button
          onClick={() => console.log("Clicked Button 1!")}
          variant="b-primary-outline-sm"
          label="Primary Border"
          icon="arrows-maximize"
          iconPosition="right"
        />
        <Button
          onClick={() => console.log("Clicked Button 2!")}
          variant="b-primary-sm"
          label="Primary"
          icon="arrows-maximize"
          iconPosition="right"
        />
        <Button
          onClick={() => console.log("Clicked Button 3!")}
          variant="b-secondary-outline-sm"
          label="Secondary Border"
          icon="arrows-maximize"
          iconPosition="right"
        />
        <Button
          onClick={() => console.log("Clicked Button 4!")}
          variant="b-secondary-sm"
          label="Secondary"
          icon="arrows-maximize"
          iconPosition="right"
        />
        <Button
          onClick={() => console.log("Clicked Button 4!")}
          variant="b-transparent-dark-sm"
          label="Secondary"
          icon="arrows-maximize"
          iconPosition="right"
        />
      </div>
      <div className="flex gap-2 pt-6 justify-center">
        <Button
          onClick={() => console.log("Clicked Button 1!")}
          variant="b-primary-outline-lg"
          icon="arrows-maximize"
          iconPosition="right"
          square
        />
        <Button
          onClick={() => console.log("Clicked Button 2!")}
          variant="b-primary-lg"
          icon="arrows-maximize"
          iconPosition="right"
          square
        />
        <Button
          onClick={() => console.log("Clicked Button 3!")}
          variant="b-secondary-outline-lg"
          icon="arrows-maximize"
          iconPosition="right"
          square
        />
        <Button
          onClick={() => console.log("Clicked Button 4!")}
          variant="b-secondary-lg"
          icon="arrows-maximize"
          iconPosition="right"
          square
        />
        <Button
          onClick={() => alert("Clicked Button 4!")}
          variant="b-transparent-dark-lg"
          icon="arrows-maximize"
          iconPosition="right"
          square
        />
      </div>
    </>
  )
}

export default App
