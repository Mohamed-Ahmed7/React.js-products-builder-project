import Alert from "./components/ui/Alert/Alert";
import { Ban, Bell, CheckCheck, Info } from "lucide-react";
function App() {
  return (
    <div style={{ margin: "2rem" }}>
      <Alert
        type="alert-default"
        icon={<Bell size={20} />}
        title={"Something went wrong"}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          nostrum perferendis <a href="./">Link</a> necessitatibus pariatur labore perspiciatis eius
          magnam, sapiente temporibus tempora!
        </p>
      </Alert>

      
      <Alert
        type="alert-info"
        icon={<Info size={20} />}
        title={"Something went wrong"}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe
        pariatur voluptate laboriosam soluta architecto obcaecati in asperiores
        vitae quo?"
      />
      <Alert
        type="alert-warning"
        icon={<Ban size={20} />}
        title={"Something went wrong"}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe
        pariatur voluptate laboriosam soluta architecto obcaecati in asperiores
        vitae quo?"
      />
      <Alert
        type="alert-error"
        icon={<Ban size={20} />}
        title={"Something went wrong"}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe
        pariatur voluptate laboriosam soluta architecto obcaecati in asperiores
        vitae quo?"
      />
      <Alert
        type="alert-success"
        icon={<CheckCheck size={20} />}
        title={"Something went wrong"}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe
        pariatur voluptate laboriosam soluta architecto obcaecati in asperiores
        vitae quo?"
      />
    </div>
  );
}

export default App;
