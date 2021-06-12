import { Button } from "antd";
import { useHistory } from "react-router-dom";
export default function Home() {
  const history = useHistory();
  return (
    <div>
      <div>我是主应用</div>
      <div>
        <Button
          type="primary"
          onClick={() => {
            history.push("/");
          }}
        >
          回到主页
        </Button>
        <Button
          type="primary"
          onClick={() => {
            history.push("/react");
          }}
        >
          到React
        </Button>
        <Button
          type="primary"
          onClick={() => {
            history.push("/test");
          }}
        >
          到测试
        </Button>
      </div>
    </div>
  );
}
