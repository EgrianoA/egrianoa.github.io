import { Typography } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "../ThemeProvider";

const { Text } = Typography;

const Footer = () => {
  const { t } = useTranslation();
  const { mode } = useThemeMode();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: "32px 24px",
        background: mode === "light" ? "#fafafa" : "#141414",
        borderTop: `1px solid ${mode === "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)"}`,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <Text
            style={{
              display: "block",
              marginBottom: "8px",
              color:
                mode === "light"
                  ? "rgba(0, 0, 0, 0.65)"
                  : "rgba(255, 255, 255, 0.65)",
            }}
          >
            {t("footer.designed")}
            <HeartFilled
              style={{
                fontSize: "0.9rem",
                color: "#2196f3",
                verticalAlign: "middle",
                margin: "0 4px",
              }}
            />
            {t("footer.by")}
          </Text>
          <Text
            style={{
              color:
                mode === "light"
                  ? "rgba(0, 0, 0, 0.65)"
                  : "rgba(255, 255, 255, 0.65)",
            }}
          >
            © {currentYear} Egriano Aristianto. {t("footer.rights")}
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
