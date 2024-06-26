export default function guardrail(mathFunction) {
  const ls = [];
  try {
    const rez = mathFunction();
    ls.push(rez);
  } catch (error) {
    ls.push(`Error: ${error.message}`);
  } finally {
    ls.push('Guardrail was processed');
  }
  return ls;
}
