function assert(condition: boolean, message?: string) {
  if (!condition) throw new Error(message || "Test failed");
}

function testAdd() {
  const result = 2 + 2;
  assert(result === 4, "2 + 2 should equal 4");
}

function runTests() {
  try {
    testAdd();
    console.log("All tests passed.");
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

runTests();
