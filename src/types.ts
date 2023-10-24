type CreateURLInput =
  | {
      service: "lmgtfy.app";
      internetExplainer: boolean;
      images: boolean;
    }
  | {
      service: "letmegooglethat.com";
    }
  | {
      service: "googlethatforyou.com";
    }
  | {
      service: "lmgt.org";
    };

export { CreateURLInput };
