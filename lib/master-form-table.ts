const IDENTIFIER_PATTERN = /^[a-z][a-z0-9_]*$/;

export function toSnakeCase(value: string): string {
  return value
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/_+/g, "_")
    .toLowerCase();
}

export function tableNameFromCardTitle(cardTitle: string): string {
  return ensureSafeIdentifier(toSnakeCase(cardTitle), "table");
}

export function columnNameFromFieldId(fieldId: string): string {
  return ensureSafeIdentifier(toSnakeCase(fieldId), "column");
}

export function ensureSafeIdentifier(
  value: string,
  kind: "table" | "column",
): string {
  if (!IDENTIFIER_PATTERN.test(value)) {
    throw new Error(`Invalid ${kind} identifier: ${value}`);
  }

  return value;
}

export function quoteIdentifier(identifier: string): string {
  return `"${identifier}"`;
}
