import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card";
import * as motion from "motion/react-client";

interface InsuranceCardProps {
  title: string;
  description?: string | React.ReactNode;
  action?: string | React.ReactNode;
  children?: React.ReactNode;
  // chart
}

const InsuranceCard: React.FC<InsuranceCardProps> = ({
  title,
  description,
  action,
  children,
}) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }}>
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="mt-2 w-full">{description}</CardDescription>
           <CardAction>{action}</CardAction>
        </CardHeader>
         
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  );
};

export default InsuranceCard;
