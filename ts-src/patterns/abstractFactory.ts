// Abstract Product: Button
interface Button {
  render(): void;
}

// Concrete Product: WindowsButton
class WindowsButton implements Button {
  render(): void {
    console.log("Rendering a button in the Windows style.");
  }
}

// Concrete Product: MacButton
class MacButton implements Button {
  render(): void {
    console.log("Rendering a button in the macOS style.");
  }
}

// Abstract Product: Checkbox
interface Checkbox {
  render(): void;
}

// Concrete Product: WindowsCheckbox
class WindowsCheckbox implements Checkbox {
  render(): void {
    console.log("Rendering a checkbox in the Windows style.");
  }
}

// Concrete Product: MacCheckbox
class MacCheckbox implements Checkbox {
  render(): void {
    console.log("Rendering a checkbox in the macOS style.");
  }
}

// Abstract Factory: GUIFactory
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Concrete Factory: WindowsGUIFactory
class WindowsGUIFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

// Concrete Factory: MacGUIFactory
class MacGUIFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

// Usage example
function renderUI(factory: GUIFactory): void {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.render();
  checkbox.render();
}

const windowsFactory = new WindowsGUIFactory();
renderUI(windowsFactory);
// Output:
// Rendering a button in the Windows style.
// Rendering a checkbox in the Windows style.

const macFactory = new MacGUIFactory();
renderUI(macFactory);
// Output:
// Rendering a button in the macOS style.
// Rendering a checkbox in the macOS style.
