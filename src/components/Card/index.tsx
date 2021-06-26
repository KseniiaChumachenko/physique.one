import React from "react";
import { EditModeCardProps, EditModeCard } from "./EditModeCard";
import { RegularModeCardProps, RegularModeCard } from "./RegularModeCard";

type SubComponentsProps = EditModeCardProps & RegularModeCardProps;

interface P extends SubComponentsProps {
  isActive: boolean;
}

export const Card = ({
  isActive,
  data,
  loading,
  error,
  actions,
  fields,
  onCancel,
  onSubmit,
}: P) => {
  return (
    <>
      {!isActive ? (
        <RegularModeCard actions={actions} data={data} />
      ) : (
        <EditModeCard
          fields={fields}
          onSubmit={onSubmit}
          onCancel={onCancel}
          error={error}
          loading={loading}
        />
      )}
    </>
  );
};
