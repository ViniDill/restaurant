import React from "react";
import { Email, Phone, Facebook, Instagram } from "@mui/icons-material";
import { Card, Icon, Text } from "./styles";

type ContactType = "email" | "phone" | "facebook" | "instagram";

interface ContactCardProps {
  type: ContactType;
  value: string;
}

const getIcon = (type: ContactType) => {
  switch (type) {
    case "email":
      return <Email className="Icon" />;
    case "phone":
      return <Phone className="Icon" />;
    case "facebook":
      return <Facebook className="Icon" />;
    case "instagram":
      return <Instagram className="Icon" />;
    default:
      return null;
  }
};

const getLink = (type: ContactType, value: string) => {
  switch (type) {
    case "email":
      return <a href={`mailto:${value}`}>{value}</a>;
    case "phone":
      return <a href={`tel:${value}`}>{value}</a>;
    case "facebook":
    case "instagram":
      return (
        <a href={value} target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      );
    default:
      return <span>{value}</span>;
  }
};

const ContactCard: React.FC<ContactCardProps> = ({ type, value }) => {
  return (
    <Card>
      <Icon>{getIcon(type)}</Icon>
      <Text>{getLink(type, value)}</Text>
    </Card>
  );
};

export default ContactCard;
