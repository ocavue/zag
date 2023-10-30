import { createComponent } from "../create-component"

export const ToastAnatomy = createComponent((props) => {
  const { palette, ...rest } = props
  return (
    <svg width={1456} height={812} viewBox="0 0 1456 812" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <rect x={301} y={275} width={855} height={209} fill={palette[5]} stroke={palette[8]} strokeWidth={4} />
      <path
        d="M354.289 362V333.035C354.289 332.17 354.448 331.525 354.766 331.101C355.084 330.659 355.57 330.377 356.224 330.253H344.617V323.469H371.355V330.253H361.736V362H354.289ZM376.342 362V333.062H383.656L383.629 362H376.342ZM380.025 329.299C378.753 329.299 377.676 328.857 376.792 327.974C375.909 327.091 375.467 325.96 375.467 324.582C375.467 323.204 375.909 322.082 376.792 321.216C377.693 320.333 378.771 319.891 380.025 319.891C381.28 319.891 382.349 320.333 383.232 321.216C384.133 322.082 384.583 323.204 384.583 324.582C384.583 325.96 384.133 327.091 383.232 327.974C382.349 328.857 381.28 329.299 380.025 329.299ZM399.376 362.371C397.026 362.371 395.198 361.779 393.89 360.595C392.583 359.394 391.929 357.61 391.929 355.242L391.876 341.489C391.876 340.871 392.035 340.341 392.353 339.899C392.671 339.457 393.122 339.166 393.705 339.024L391.876 334.228V333.407L393.334 324.794H399.137V353.149C399.137 354.28 399.323 355.066 399.694 355.507C400.083 355.949 400.798 356.17 401.84 356.17C402.671 356.17 403.404 356.161 404.04 356.143C404.676 356.126 405.259 356.09 405.789 356.037V361.973C405.029 362.186 404.058 362.3 402.874 362.318C401.69 362.353 400.524 362.371 399.376 362.371ZM388.458 339.024V333.062H405.709V339.024H388.458ZM410.892 362V320.686H418.233V362H410.892ZM437.484 362.398C434.622 362.398 432.166 361.823 430.117 360.675C428.067 359.509 426.495 357.822 425.4 355.613C424.304 353.387 423.757 350.684 423.757 347.504C423.757 344.289 424.331 341.568 425.479 339.342C426.645 337.116 428.262 335.42 430.329 334.254C432.413 333.088 434.834 332.505 437.59 332.505C440.275 332.505 442.545 333.027 444.4 334.069C446.273 335.094 447.695 336.622 448.667 338.653C449.638 340.667 450.124 343.141 450.124 346.073C450.124 346.55 450.107 347.001 450.071 347.425C450.054 347.849 450.027 348.352 449.992 348.935H430.965C431.141 351.585 431.786 353.529 432.899 354.765C434.03 356.002 435.496 356.62 437.298 356.62C438.888 356.62 440.098 356.276 440.929 355.587C441.759 354.898 442.28 354.059 442.492 353.069H449.515C449.356 354.995 448.755 356.665 447.713 358.078C446.688 359.474 445.301 360.542 443.552 361.284C441.821 362.027 439.798 362.398 437.484 362.398ZM434.092 344.457H442.996C442.925 342.478 442.439 340.977 441.538 339.952C440.655 338.927 439.242 338.415 437.298 338.415C435.161 338.415 433.579 339.157 432.555 340.641C431.548 342.107 431 344.174 430.912 346.842C431.053 345.923 431.38 345.296 431.892 344.96C432.405 344.625 433.138 344.457 434.092 344.457Z"
        fill={palette[0]}
      />
      <path
        opacity={0.65}
        d="M350.849 437V432.723H356.654C358.925 432.723 360.915 432.237 362.623 431.266C364.346 430.279 365.685 428.822 366.641 426.895C367.612 424.968 368.098 422.587 368.098 419.751C368.098 416.759 367.612 414.322 366.641 412.442C365.685 410.562 364.346 409.176 362.623 408.283C360.899 407.39 358.902 406.943 356.63 406.943H350.661V402.831H356.771C359.873 402.831 362.615 403.426 364.996 404.617C367.393 405.792 369.273 407.625 370.636 410.116C371.999 412.607 372.681 415.803 372.681 419.704C372.681 423.495 371.976 426.676 370.566 429.245C369.171 431.814 367.276 433.749 364.879 435.049C362.482 436.35 359.787 437 356.795 437H350.849ZM346.995 437V402.831H351.437V437H346.995ZM388.735 437.353C386.401 437.353 384.349 436.843 382.578 435.825C380.824 434.807 379.461 433.31 378.489 431.336C377.518 429.347 377.032 426.918 377.032 424.052C377.032 421.294 377.534 418.928 378.536 416.954C379.539 414.98 380.918 413.469 382.672 412.419C384.427 411.369 386.425 410.844 388.665 410.844C390.89 410.844 392.793 411.322 394.375 412.278C395.973 413.234 397.203 414.604 398.065 416.39C398.927 418.161 399.35 420.284 399.334 422.759C399.334 423.26 399.318 423.675 399.287 424.004C399.256 424.333 399.232 424.678 399.216 425.038H381.403C381.513 427.858 382.218 429.997 383.518 431.454C384.834 432.895 386.511 433.616 388.547 433.616C390.271 433.616 391.602 433.256 392.542 432.535C393.498 431.799 394.101 430.859 394.352 429.715H398.629C398.519 431.344 398.018 432.731 397.125 433.874C396.248 435.018 395.088 435.888 393.647 436.483C392.206 437.063 390.568 437.353 388.735 437.353ZM383.73 421.748H394.939C394.908 419.555 394.368 417.832 393.318 416.578C392.268 415.325 390.662 414.698 388.5 414.698C386.229 414.698 384.505 415.474 383.33 417.025C382.155 418.56 381.513 420.683 381.403 423.393C381.529 422.751 381.779 422.32 382.155 422.101C382.547 421.866 383.072 421.748 383.73 421.748ZM413.024 437.4C411.254 437.4 409.632 437.133 408.16 436.6C406.703 436.052 405.52 435.206 404.611 434.062C403.702 432.903 403.193 431.415 403.084 429.597H407.408C407.69 431.164 408.308 432.245 409.264 432.84C410.235 433.42 411.465 433.71 412.954 433.71C413.972 433.71 414.888 433.6 415.703 433.381C416.533 433.162 417.191 432.793 417.677 432.276C418.163 431.759 418.406 431.054 418.406 430.161C418.406 429.472 418.257 428.916 417.959 428.493C417.661 428.07 417.246 427.725 416.714 427.459C416.181 427.177 415.554 426.934 414.834 426.73C414.129 426.527 413.361 426.307 412.531 426.072C410.98 425.618 409.546 425.093 408.23 424.498C406.914 423.887 405.857 423.072 405.058 422.054C404.259 421.036 403.859 419.673 403.859 417.965C403.859 415.866 404.658 414.166 406.256 412.865C407.854 411.549 409.953 410.891 412.554 410.891C414.199 410.891 415.68 411.142 416.996 411.644C418.327 412.145 419.408 412.952 420.239 414.064C421.085 415.161 421.602 416.633 421.79 418.482H417.489C417.332 417.636 417.043 416.923 416.62 416.343C416.212 415.764 415.672 415.325 414.998 415.027C414.324 414.73 413.502 414.581 412.531 414.581C411.716 414.581 410.98 414.698 410.322 414.933C409.664 415.153 409.139 415.505 408.747 415.991C408.355 416.477 408.16 417.119 408.16 417.918C408.16 418.795 408.395 419.5 408.865 420.033C409.335 420.566 410 421.012 410.862 421.372C411.724 421.717 412.734 422.062 413.894 422.406C414.787 422.688 415.742 422.986 416.761 423.299C417.779 423.597 418.735 423.997 419.628 424.498C420.536 424.999 421.273 425.673 421.837 426.519C422.416 427.349 422.706 428.438 422.706 429.785C422.706 432.198 421.813 434.07 420.027 435.402C418.241 436.734 415.907 437.4 413.024 437.4ZM438.47 437.423C436.089 437.423 434.021 436.882 432.266 435.801C430.512 434.72 429.156 433.185 428.201 431.195C427.245 429.206 426.767 426.864 426.767 424.169C426.767 421.333 427.253 418.928 428.224 416.954C429.211 414.98 430.566 413.476 432.29 412.442C434.029 411.393 436.011 410.868 438.235 410.868C440.366 410.868 442.175 411.283 443.664 412.113C445.152 412.928 446.288 414.017 447.071 415.38C447.87 416.743 448.293 418.247 448.34 419.892H444.04C444.008 419.265 443.875 418.646 443.64 418.035C443.405 417.424 443.053 416.876 442.583 416.39C442.113 415.889 441.51 415.49 440.773 415.192C440.053 414.879 439.183 414.722 438.165 414.722C435.799 414.706 434.052 415.529 432.924 417.189C431.796 418.85 431.232 421.13 431.232 424.028C431.232 427.13 431.859 429.496 433.112 431.125C434.366 432.754 436.246 433.569 438.752 433.569C439.724 433.569 440.593 433.35 441.361 432.911C442.128 432.472 442.739 431.9 443.194 431.195C443.664 430.49 443.914 429.738 443.946 428.939H448.246C448.199 430.553 447.745 432.002 446.883 433.287C446.022 434.572 444.862 435.582 443.405 436.318C441.948 437.055 440.303 437.423 438.47 437.423ZM453.614 437V411.338H457.327L457.797 421.208L457.28 419.868C457.389 418.897 457.601 417.887 457.914 416.837C458.243 415.787 458.705 414.808 459.301 413.899C459.912 412.975 460.687 412.231 461.627 411.667C462.583 411.103 463.75 410.821 465.129 410.821C465.395 410.821 465.646 410.837 465.881 410.868C466.131 410.899 466.374 410.938 466.609 410.986V415.615C466.218 415.49 465.802 415.411 465.364 415.38C464.941 415.333 464.541 415.309 464.165 415.309C463.398 415.309 462.622 415.458 461.839 415.756C461.055 416.054 460.327 416.531 459.653 417.189C458.98 417.832 458.423 418.67 457.985 419.704V437H453.614ZM471.042 437V411.502H475.46L475.389 437H471.042ZM473.274 407.39C472.412 407.39 471.676 407.092 471.065 406.497C470.47 405.902 470.172 405.134 470.172 404.194C470.172 403.27 470.47 402.51 471.065 401.914C471.676 401.319 472.412 401.021 473.274 401.021C474.12 401.021 474.841 401.319 475.436 401.914C476.047 402.51 476.353 403.27 476.353 404.194C476.353 405.134 476.047 405.902 475.436 406.497C474.825 407.092 474.104 407.39 473.274 407.39ZM494.52 437.282C492.859 437.282 491.519 436.992 490.501 436.412C489.498 435.817 488.754 435.136 488.269 434.368C487.783 433.6 487.493 432.958 487.399 432.441L486.013 432.206L487.681 430.984C487.822 431.36 488.128 431.759 488.598 432.182C489.068 432.605 489.702 432.974 490.501 433.287C491.316 433.585 492.279 433.733 493.392 433.733C495.319 433.733 496.917 432.942 498.186 431.36C499.47 429.778 500.113 427.294 500.113 423.91C500.113 420.871 499.517 418.584 498.327 417.048C497.152 415.497 495.648 414.722 493.815 414.722C492.577 414.722 491.527 414.918 490.666 415.309C489.82 415.701 489.146 416.179 488.645 416.743C488.159 417.291 487.838 417.824 487.681 418.341V416.602C487.712 416.101 487.869 415.529 488.151 414.886C488.433 414.228 488.864 413.594 489.444 412.983C490.039 412.372 490.799 411.871 491.723 411.479C492.647 411.072 493.775 410.868 495.107 410.868C497.065 410.868 498.757 411.393 500.183 412.442C501.609 413.492 502.705 414.973 503.473 416.884C504.241 418.795 504.625 421.036 504.625 423.605C504.625 425.939 504.335 427.968 503.755 429.691C503.175 431.399 502.392 432.817 501.405 433.945C500.434 435.073 499.345 435.911 498.139 436.459C496.948 437.008 495.742 437.282 494.52 437.282ZM483.334 446.471V411.338H487.634L487.681 414.816V430.984L487.399 432.441L487.681 437.024L487.705 446.471H483.334ZM518.163 437.353C516.173 437.353 514.654 436.843 513.604 435.825C512.57 434.791 512.053 433.326 512.053 431.43V417.518C512.053 417.017 512.155 416.555 512.359 416.132C512.562 415.693 512.86 415.411 513.252 415.286L512.053 412.372V411.573L513.111 403.912H516.377V430.702C516.377 431.705 516.612 432.386 517.082 432.746C517.552 433.091 518.359 433.263 519.503 433.263C520.333 433.263 521.038 433.263 521.618 433.263C522.197 433.248 522.8 433.216 523.427 433.169V437.024C522.565 437.18 521.672 437.274 520.748 437.306C519.839 437.337 518.978 437.353 518.163 437.353ZM508.317 415.286V411.338H523.216V415.286H508.317ZM528.415 437V411.502H532.833L532.762 437H528.415ZM530.647 407.39C529.785 407.39 529.049 407.092 528.438 406.497C527.843 405.902 527.545 405.134 527.545 404.194C527.545 403.27 527.843 402.51 528.438 401.914C529.049 401.319 529.785 401.021 530.647 401.021C531.493 401.021 532.214 401.319 532.809 401.914C533.42 402.51 533.726 403.27 533.726 404.194C533.726 405.134 533.42 405.902 532.809 406.497C532.198 407.092 531.477 407.39 530.647 407.39ZM550.178 437.353C547.922 437.353 545.94 436.843 544.233 435.825C542.541 434.807 541.217 433.31 540.261 431.336C539.321 429.347 538.851 426.911 538.851 424.028C538.851 421.302 539.353 418.952 540.355 416.978C541.358 415.004 542.721 413.492 544.444 412.442C546.183 411.377 548.126 410.844 550.272 410.844C552.607 410.844 554.62 411.377 556.312 412.442C558.019 413.492 559.335 415.004 560.26 416.978C561.184 418.952 561.646 421.302 561.646 424.028C561.646 426.911 561.129 429.347 560.095 431.336C559.077 433.31 557.698 434.807 555.959 435.825C554.22 436.843 552.293 437.353 550.178 437.353ZM550.272 433.498C552.372 433.498 554.048 432.715 555.301 431.148C556.555 429.582 557.181 427.208 557.181 424.028C557.181 420.989 556.562 418.678 555.325 417.095C554.103 415.497 552.387 414.698 550.178 414.698C548.095 414.698 546.426 415.497 545.173 417.095C543.935 418.678 543.316 420.989 543.316 424.028C543.316 427.099 543.943 429.449 545.196 431.078C546.465 432.692 548.157 433.498 550.272 433.498ZM567.58 437V411.338H571.293L571.763 421.02L571.34 419.069C571.543 417.55 571.966 416.171 572.609 414.933C573.267 413.68 574.183 412.685 575.358 411.949C576.549 411.197 578.045 410.821 579.847 410.821C582.228 410.821 584.077 411.557 585.393 413.03C586.724 414.487 587.39 416.665 587.39 419.563V437H583.019V420.996C583.019 419.539 582.855 418.364 582.526 417.471C582.212 416.578 581.703 415.928 580.998 415.521C580.309 415.114 579.384 414.91 578.225 414.91C576.831 414.91 575.601 415.294 574.536 416.061C573.486 416.829 572.624 417.887 571.951 419.234V437H567.58Z"
        fill={palette[0]}
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1158 486L1158 273L920 273L920 486L1158 486Z" fill={palette[4]} />
      <path
        d="M993.39 395.494C990.476 395.494 987.868 394.812 985.565 393.449C983.277 392.086 981.476 390.096 980.16 387.48C978.844 384.848 978.186 381.636 978.186 377.845C978.186 374.257 978.828 371.147 980.113 368.515C981.397 365.868 983.191 363.823 985.494 362.382C987.797 360.925 990.468 360.196 993.508 360.196C995.748 360.196 997.808 360.635 999.688 361.512C1001.58 362.39 1003.11 363.69 1004.27 365.413C1005.45 367.121 1006.07 369.236 1006.15 371.758H1001.66C1001.57 370.082 1001.13 368.696 1000.35 367.599C999.578 366.487 998.584 365.656 997.362 365.108C996.14 364.544 994.792 364.262 993.32 364.262C991.299 364.262 989.481 364.802 987.867 365.883C986.27 366.949 985.008 368.492 984.084 370.513C983.16 372.534 982.698 374.97 982.698 377.821C982.698 381.064 983.183 383.689 984.155 385.694C985.126 387.684 986.426 389.141 988.056 390.065C989.685 390.974 991.487 391.428 993.461 391.428C995.262 391.428 996.751 391.107 997.926 390.464C999.116 389.806 1000.02 388.945 1000.65 387.879C1001.28 386.814 1001.63 385.663 1001.71 384.425H1006.15C1006.01 386.697 1005.41 388.663 1004.34 390.323C1003.29 391.984 1001.84 393.261 999.994 394.154C998.145 395.047 995.944 395.494 993.39 395.494ZM1011.89 395V358.457H1016.26V395H1011.89ZM1033.55 395.353C1031.29 395.353 1029.31 394.843 1027.6 393.825C1025.91 392.807 1024.59 391.31 1023.63 389.336C1022.69 387.347 1022.22 384.911 1022.22 382.028C1022.22 379.302 1022.72 376.952 1023.73 374.978C1024.73 373.004 1026.09 371.492 1027.82 370.442C1029.55 369.377 1031.5 368.844 1033.64 368.844C1035.98 368.844 1037.99 369.377 1039.68 370.442C1041.39 371.492 1042.71 373.004 1043.63 374.978C1044.56 376.952 1045.02 379.302 1045.02 382.028C1045.02 384.911 1044.5 387.347 1043.47 389.336C1042.45 391.31 1041.07 392.807 1039.33 393.825C1037.59 394.843 1035.66 395.353 1033.55 395.353ZM1033.64 391.498C1035.74 391.498 1037.42 390.715 1038.67 389.148C1039.93 387.582 1040.55 385.208 1040.55 382.028C1040.55 378.989 1039.93 376.678 1038.7 375.095C1037.47 373.497 1035.76 372.698 1033.55 372.698C1031.47 372.698 1029.8 373.497 1028.54 375.095C1027.31 376.678 1026.69 378.989 1026.69 382.028C1026.69 385.099 1027.31 387.449 1028.57 389.078C1029.84 390.692 1031.53 391.498 1033.64 391.498ZM1059.11 395.4C1057.33 395.4 1055.71 395.133 1054.24 394.6C1052.78 394.052 1051.6 393.206 1050.69 392.062C1049.78 390.903 1049.27 389.415 1049.16 387.597H1053.49C1053.77 389.164 1054.39 390.245 1055.35 390.84C1056.32 391.42 1057.55 391.71 1059.03 391.71C1060.05 391.71 1060.97 391.6 1061.78 391.381C1062.61 391.162 1063.27 390.793 1063.76 390.276C1064.24 389.759 1064.49 389.054 1064.49 388.161C1064.49 387.472 1064.34 386.916 1064.04 386.493C1063.74 386.07 1063.33 385.725 1062.79 385.459C1062.26 385.177 1061.64 384.934 1060.91 384.73C1060.21 384.527 1059.44 384.307 1058.61 384.072C1057.06 383.618 1055.63 383.093 1054.31 382.498C1053 381.887 1051.94 381.072 1051.14 380.054C1050.34 379.036 1049.94 377.673 1049.94 375.965C1049.94 373.866 1050.74 372.166 1052.34 370.865C1053.94 369.549 1056.03 368.891 1058.64 368.891C1060.28 368.891 1061.76 369.142 1063.08 369.644C1064.41 370.145 1065.49 370.952 1066.32 372.064C1067.17 373.161 1067.68 374.633 1067.87 376.482H1063.57C1063.41 375.636 1063.12 374.923 1062.7 374.343C1062.29 373.764 1061.75 373.325 1061.08 373.027C1060.41 372.73 1059.58 372.581 1058.61 372.581C1057.8 372.581 1057.06 372.698 1056.4 372.933C1055.74 373.153 1055.22 373.505 1054.83 373.991C1054.44 374.477 1054.24 375.119 1054.24 375.918C1054.24 376.795 1054.48 377.5 1054.95 378.033C1055.42 378.566 1056.08 379.012 1056.94 379.372C1057.8 379.717 1058.82 380.062 1059.97 380.406C1060.87 380.688 1061.82 380.986 1062.84 381.299C1063.86 381.597 1064.82 381.997 1065.71 382.498C1066.62 382.999 1067.35 383.673 1067.92 384.519C1068.5 385.349 1068.79 386.438 1068.79 387.785C1068.79 390.198 1067.89 392.07 1066.11 393.402C1064.32 394.734 1061.99 395.4 1059.11 395.4ZM1084.39 395.353C1082.05 395.353 1080 394.843 1078.23 393.825C1076.48 392.807 1075.11 391.31 1074.14 389.336C1073.17 387.347 1072.68 384.918 1072.68 382.052C1072.68 379.294 1073.19 376.928 1074.19 374.954C1075.19 372.98 1076.57 371.469 1078.32 370.419C1080.08 369.369 1082.08 368.844 1084.32 368.844C1086.54 368.844 1088.44 369.322 1090.03 370.278C1091.62 371.234 1092.85 372.604 1093.72 374.39C1094.58 376.161 1095 378.284 1094.99 380.759C1094.99 381.26 1094.97 381.675 1094.94 382.004C1094.91 382.333 1094.88 382.678 1094.87 383.038H1077.05C1077.16 385.858 1077.87 387.997 1079.17 389.454C1080.49 390.895 1082.16 391.616 1084.2 391.616C1085.92 391.616 1087.25 391.256 1088.19 390.535C1089.15 389.799 1089.75 388.859 1090 387.715H1094.28C1094.17 389.344 1093.67 390.731 1092.78 391.874C1091.9 393.018 1090.74 393.888 1089.3 394.483C1087.86 395.063 1086.22 395.353 1084.39 395.353ZM1079.38 379.748H1090.59C1090.56 377.555 1090.02 375.832 1088.97 374.578C1087.92 373.325 1086.31 372.698 1084.15 372.698C1081.88 372.698 1080.16 373.474 1078.98 375.025C1077.81 376.56 1077.16 378.683 1077.05 381.393C1077.18 380.751 1077.43 380.32 1077.81 380.101C1078.2 379.866 1078.72 379.748 1079.38 379.748Z"
        fill={palette[0]}
      />
      <path
        d="M426.204 180V164.166H429.133L429.51 170.27L429.206 169.429C429.273 168.791 429.399 168.144 429.583 167.486C429.776 166.829 430.047 166.225 430.395 165.674C430.752 165.123 431.207 164.683 431.758 164.355C432.318 164.016 433 163.847 433.802 163.847C433.995 163.847 434.189 163.857 434.382 163.876C434.575 163.895 434.754 163.929 434.919 163.977V167.631C434.59 167.525 434.237 167.457 433.86 167.428C433.493 167.39 433.154 167.37 432.845 167.37C432.468 167.37 432.062 167.448 431.627 167.602C431.192 167.747 430.791 167.97 430.424 168.269C430.056 168.569 429.79 168.941 429.626 169.386V180H426.204ZM443.44 180.218C441.98 180.218 440.709 179.903 439.626 179.275C438.544 178.647 437.703 177.723 437.103 176.505C436.504 175.278 436.204 173.775 436.204 171.996C436.204 170.314 436.518 168.864 437.147 167.646C437.785 166.428 438.655 165.495 439.757 164.847C440.859 164.19 442.106 163.861 443.498 163.861C445.006 163.861 446.296 164.19 447.369 164.847C448.452 165.495 449.283 166.428 449.863 167.646C450.443 168.864 450.733 170.314 450.733 171.996C450.733 173.775 450.409 175.278 449.762 176.505C449.124 177.723 448.254 178.647 447.152 179.275C446.05 179.903 444.812 180.218 443.44 180.218ZM443.498 177.303C444.609 177.303 445.518 176.887 446.224 176.056C446.929 175.225 447.282 173.871 447.282 171.996C447.282 170.256 446.939 168.951 446.253 168.081C445.566 167.211 444.629 166.776 443.44 166.776C442.328 166.776 441.419 167.206 440.714 168.066C440.018 168.927 439.67 170.237 439.67 171.996C439.67 173.784 440.023 175.118 440.728 175.998C441.444 176.868 442.367 177.303 443.498 177.303ZM460.234 180.218C458.774 180.218 457.503 179.903 456.42 179.275C455.338 178.647 454.497 177.723 453.897 176.505C453.298 175.278 452.998 173.775 452.998 171.996C452.998 170.314 453.312 168.864 453.941 167.646C454.579 166.428 455.449 165.495 456.551 164.847C457.653 164.19 458.9 163.861 460.292 163.861C461.8 163.861 463.09 164.19 464.163 164.847C465.246 165.495 466.077 166.428 466.657 167.646C467.237 168.864 467.527 170.314 467.527 171.996C467.527 173.775 467.203 175.278 466.556 176.505C465.918 177.723 465.048 178.647 463.946 179.275C462.844 179.903 461.606 180.218 460.234 180.218ZM460.292 177.303C461.403 177.303 462.312 176.887 463.018 176.056C463.723 175.225 464.076 173.871 464.076 171.996C464.076 170.256 463.733 168.951 463.047 168.081C462.36 167.211 461.423 166.776 460.234 166.776C459.122 166.776 458.213 167.206 457.508 168.066C456.812 168.927 456.464 170.237 456.464 171.996C456.464 173.784 456.817 175.118 457.522 175.998C458.238 176.868 459.161 177.303 460.292 177.303ZM475.453 180.232C474.196 180.232 473.215 179.913 472.509 179.275C471.813 178.627 471.465 177.704 471.465 176.505V168.501C471.465 168.182 471.533 167.897 471.668 167.646C471.803 167.385 472.002 167.221 472.263 167.153L471.465 164.804V164.383L472.234 159.642H474.844V175.65C474.844 176.211 474.964 176.602 475.206 176.824C475.457 177.047 475.921 177.158 476.598 177.158C477.033 177.158 477.434 177.158 477.802 177.158C478.169 177.148 478.502 177.139 478.802 177.129V180.044C478.299 180.131 477.748 180.184 477.149 180.203C476.55 180.222 475.984 180.232 475.453 180.232ZM469.392 167.153V164.166H478.831V167.153H469.392Z"
        fill={palette[0]}
      />
      <path
        d="M138.018 346.232C136.761 346.232 135.78 345.913 135.075 345.275C134.379 344.627 134.031 343.704 134.031 342.505V334.501C134.031 334.182 134.098 333.897 134.234 333.646C134.369 333.385 134.567 333.221 134.828 333.153L134.031 330.804V330.383L134.799 325.642H137.409V341.65C137.409 342.211 137.53 342.602 137.772 342.824C138.023 343.047 138.487 343.158 139.164 343.158C139.599 343.158 140 343.158 140.367 343.158C140.734 343.148 141.068 343.139 141.368 343.129V346.044C140.865 346.131 140.314 346.184 139.715 346.203C139.115 346.222 138.55 346.232 138.018 346.232ZM131.957 333.153V330.166H141.397V333.153H131.957ZM144.618 346V330.166H148.083L148.04 346H144.618ZM146.372 327.831C145.744 327.831 145.212 327.614 144.777 327.179C144.342 326.734 144.125 326.169 144.125 325.482C144.125 324.806 144.342 324.255 144.777 323.829C145.212 323.404 145.744 323.191 146.372 323.191C146.981 323.191 147.503 323.404 147.938 323.829C148.383 324.255 148.605 324.806 148.605 325.482C148.605 326.169 148.383 326.734 147.938 327.179C147.503 327.614 146.981 327.831 146.372 327.831ZM156.908 346.232C155.651 346.232 154.67 345.913 153.964 345.275C153.268 344.627 152.92 343.704 152.92 342.505V334.501C152.92 334.182 152.988 333.897 153.123 333.646C153.258 333.385 153.457 333.221 153.718 333.153L152.92 330.804V330.383L153.689 325.642H156.299V341.65C156.299 342.211 156.419 342.602 156.661 342.824C156.912 343.047 157.376 343.158 158.053 343.158C158.488 343.158 158.889 343.158 159.257 343.158C159.624 343.148 159.957 343.139 160.257 343.129V346.044C159.754 346.131 159.203 346.184 158.604 346.203C158.005 346.222 157.439 346.232 156.908 346.232ZM150.847 333.153V330.166H160.286V333.153H150.847ZM163.507 346V323.438H166.929V346H163.507ZM177.644 346.218C176.116 346.218 174.792 345.908 173.671 345.289C172.559 344.661 171.704 343.738 171.104 342.52C170.505 341.302 170.205 339.808 170.205 338.039C170.205 336.319 170.519 334.849 171.148 333.631C171.786 332.404 172.661 331.471 173.772 330.833C174.884 330.185 176.16 329.861 177.6 329.861C179.021 329.861 180.234 330.142 181.24 330.702C182.255 331.263 183.028 332.094 183.56 333.196C184.091 334.289 184.357 335.632 184.357 337.227C184.357 337.537 184.348 337.793 184.328 337.996C184.319 338.199 184.304 338.441 184.285 338.721H173.613C173.7 340.335 174.096 341.524 174.802 342.288C175.507 343.042 176.373 343.419 177.397 343.419C178.354 343.419 179.084 343.216 179.587 342.81C180.099 342.394 180.428 341.93 180.573 341.418H183.879C183.792 342.433 183.473 343.303 182.922 344.028C182.371 344.743 181.641 345.289 180.732 345.666C179.833 346.034 178.804 346.218 177.644 346.218ZM175.179 336.386H180.95C180.921 335.226 180.64 334.332 180.109 333.704C179.577 333.066 178.702 332.747 177.484 332.747C176.218 332.747 175.275 333.172 174.657 334.023C174.038 334.864 173.69 336.029 173.613 337.517C173.69 337.082 173.854 336.788 174.106 336.633C174.357 336.469 174.715 336.386 175.179 336.386Z"
        fill={palette[0]}
      />
      <path
        d="M957.628 570.276C956.062 570.276 954.718 569.932 953.597 569.246C952.475 568.55 951.615 567.583 951.016 566.346C950.426 565.109 950.131 563.673 950.131 562.039C950.131 560.319 950.436 558.849 951.045 557.631C951.654 556.413 952.499 555.485 953.582 554.847C954.665 554.2 955.912 553.876 957.323 553.876C958.725 553.876 959.899 554.137 960.847 554.659C961.804 555.171 962.519 555.862 962.993 556.732C963.466 557.593 963.684 558.555 963.645 559.618H960.354C960.344 559.193 960.276 558.806 960.151 558.458C960.025 558.1 959.836 557.801 959.585 557.559C959.343 557.308 959.034 557.114 958.657 556.979C958.28 556.844 957.84 556.776 957.338 556.776C955.984 556.766 955.022 557.23 954.452 558.168C953.891 559.106 953.611 560.372 953.611 561.967C953.611 563.784 953.949 565.142 954.626 566.041C955.312 566.931 956.381 567.38 957.831 567.39C958.169 567.39 958.536 567.293 958.933 567.1C959.339 566.897 959.682 566.612 959.962 566.244C960.252 565.867 960.392 565.418 960.383 564.896H963.645C963.684 566.008 963.418 566.965 962.848 567.767C962.287 568.569 961.543 569.188 960.615 569.623C959.687 570.058 958.691 570.276 957.628 570.276ZM966.724 570V547.438H970.146V570H966.724ZM980.646 570.218C979.186 570.218 977.915 569.903 976.832 569.275C975.75 568.647 974.909 567.723 974.309 566.505C973.71 565.278 973.41 563.775 973.41 561.996C973.41 560.314 973.724 558.864 974.353 557.646C974.991 556.428 975.861 555.495 976.963 554.847C978.065 554.19 979.312 553.861 980.704 553.861C982.212 553.861 983.502 554.19 984.575 554.847C985.658 555.495 986.489 556.428 987.069 557.646C987.649 558.864 987.939 560.314 987.939 561.996C987.939 563.775 987.615 565.278 986.968 566.505C986.33 567.723 985.46 568.647 984.358 569.275C983.256 569.903 982.018 570.218 980.646 570.218ZM980.704 567.303C981.815 567.303 982.724 566.887 983.43 566.056C984.135 565.225 984.488 563.871 984.488 561.996C984.488 560.256 984.145 558.951 983.459 558.081C982.772 557.211 981.835 556.776 980.646 556.776C979.534 556.776 978.625 557.206 977.92 558.066C977.224 558.927 976.876 560.237 976.876 561.996C976.876 563.784 977.229 565.118 977.934 565.998C978.65 566.868 979.573 567.303 980.704 567.303ZM996.627 570.247C995.438 570.247 994.375 570.073 993.437 569.724C992.509 569.376 991.77 568.84 991.219 568.115C990.677 567.38 990.378 566.443 990.32 565.302H993.626C993.751 566.114 994.075 566.689 994.597 567.027C995.129 567.366 995.781 567.535 996.555 567.535C997.115 567.535 997.613 567.482 998.048 567.375C998.493 567.259 998.841 567.071 999.092 566.81C999.353 566.539 999.484 566.177 999.484 565.722C999.484 565.403 999.411 565.142 999.266 564.939C999.131 564.727 998.918 564.543 998.628 564.388C998.348 564.234 997.99 564.089 997.555 563.953C997.13 563.818 996.637 563.668 996.076 563.504C995.071 563.214 994.157 562.871 993.336 562.474C992.514 562.078 991.861 561.561 991.378 560.923C990.895 560.275 990.653 559.434 990.653 558.4C990.653 556.989 991.175 555.887 992.219 555.094C993.263 554.292 994.607 553.89 996.25 553.89C997.313 553.89 998.27 554.045 999.121 554.355C999.981 554.654 1000.69 555.157 1001.24 555.862C1001.79 556.558 1002.15 557.506 1002.31 558.704L999.005 558.69C998.86 558.129 998.647 557.699 998.367 557.399C998.087 557.09 997.763 556.877 997.396 556.761C997.038 556.636 996.646 556.573 996.221 556.573C995.757 556.573 995.356 556.645 995.018 556.79C994.679 556.935 994.418 557.138 994.235 557.399C994.051 557.66 993.959 557.975 993.959 558.342C993.959 558.767 994.08 559.125 994.322 559.415C994.573 559.695 994.945 559.942 995.438 560.154C995.941 560.357 996.564 560.57 997.309 560.792C997.908 560.966 998.527 561.16 999.165 561.372C999.803 561.575 1000.4 561.836 1000.95 562.155C1001.5 562.474 1001.94 562.9 1002.28 563.431C1002.62 563.953 1002.79 564.635 1002.79 565.476C1002.79 566.974 1002.22 568.144 1001.09 568.985C999.972 569.826 998.483 570.247 996.627 570.247ZM1012.47 570.218C1010.94 570.218 1009.61 569.908 1008.49 569.289C1007.38 568.661 1006.53 567.738 1005.93 566.52C1005.33 565.302 1005.03 563.808 1005.03 562.039C1005.03 560.319 1005.34 558.849 1005.97 557.631C1006.61 556.404 1007.48 555.471 1008.59 554.833C1009.71 554.185 1010.98 553.861 1012.42 553.861C1013.84 553.861 1015.06 554.142 1016.06 554.702C1017.08 555.263 1017.85 556.094 1018.38 557.196C1018.91 558.289 1019.18 559.632 1019.18 561.227C1019.18 561.537 1019.17 561.793 1019.15 561.996C1019.14 562.199 1019.13 562.441 1019.11 562.721H1008.44C1008.52 564.335 1008.92 565.524 1009.62 566.288C1010.33 567.042 1011.19 567.419 1012.22 567.419C1013.18 567.419 1013.91 567.216 1014.41 566.81C1014.92 566.394 1015.25 565.93 1015.4 565.418H1018.7C1018.61 566.433 1018.3 567.303 1017.74 568.028C1017.19 568.743 1016.46 569.289 1015.55 569.666C1014.66 570.034 1013.63 570.218 1012.47 570.218ZM1010 560.386H1015.77C1015.74 559.226 1015.46 558.332 1014.93 557.704C1014.4 557.066 1013.52 556.747 1012.31 556.747C1011.04 556.747 1010.1 557.172 1009.48 558.023C1008.86 558.864 1008.51 560.029 1008.44 561.517C1008.51 561.082 1008.68 560.788 1008.93 560.633C1009.18 560.469 1009.54 560.386 1010 560.386ZM1032.23 570.232C1030.97 570.232 1029.99 569.913 1029.28 569.275C1028.59 568.627 1028.24 567.704 1028.24 566.505V558.501C1028.24 558.182 1028.31 557.897 1028.44 557.646C1028.58 557.385 1028.78 557.221 1029.04 557.153L1028.24 554.804V554.383L1029.01 549.642H1031.62V565.65C1031.62 566.211 1031.74 566.602 1031.98 566.824C1032.23 567.047 1032.7 567.158 1033.37 567.158C1033.81 567.158 1034.21 567.158 1034.58 567.158C1034.94 567.148 1035.28 567.139 1035.58 567.129V570.044C1035.07 570.131 1034.52 570.184 1033.92 570.203C1033.33 570.222 1032.76 570.232 1032.23 570.232ZM1026.17 557.153V554.166H1035.61V557.153H1026.17ZM1038.8 570V554.166H1041.73L1042.1 560.27L1041.8 559.429C1041.87 558.791 1041.99 558.144 1042.18 557.486C1042.37 556.829 1042.64 556.225 1042.99 555.674C1043.35 555.123 1043.8 554.683 1044.35 554.355C1044.91 554.016 1045.59 553.847 1046.4 553.847C1046.59 553.847 1046.78 553.857 1046.98 553.876C1047.17 553.895 1047.35 553.929 1047.51 553.977V557.631C1047.18 557.525 1046.83 557.457 1046.45 557.428C1046.09 557.39 1045.75 557.37 1045.44 557.37C1045.06 557.37 1044.66 557.448 1044.22 557.602C1043.79 557.747 1043.39 557.97 1043.02 558.269C1042.65 558.569 1042.39 558.941 1042.22 559.386V570H1038.8ZM1050.07 570V554.166H1053.54L1053.49 570H1050.07ZM1051.83 551.831C1051.2 551.831 1050.67 551.614 1050.23 551.179C1049.8 550.734 1049.58 550.169 1049.58 549.482C1049.58 548.806 1049.8 548.255 1050.23 547.829C1050.67 547.404 1051.2 547.191 1051.83 547.191C1052.43 547.191 1052.96 547.404 1053.39 547.829C1053.84 548.255 1054.06 548.806 1054.06 549.482C1054.06 550.169 1053.84 550.734 1053.39 551.179C1052.96 551.614 1052.43 551.831 1051.83 551.831ZM1064.04 576.467C1062.75 576.467 1061.59 576.254 1060.56 575.829C1059.53 575.413 1058.74 574.775 1058.18 573.915C1057.62 573.055 1057.4 571.977 1057.53 570.682H1060.83C1060.82 571.233 1060.89 571.726 1061.04 572.161C1061.18 572.605 1061.49 572.958 1061.95 573.219C1062.41 573.48 1063.12 573.611 1064.07 573.611C1064.89 573.611 1065.52 573.495 1065.95 573.263C1066.4 573.031 1066.7 572.678 1066.85 572.204C1067.01 571.73 1067.08 571.117 1067.08 570.363V566.07C1067 566.525 1066.81 567.003 1066.52 567.506C1066.23 568.009 1065.78 568.434 1065.17 568.782C1064.56 569.12 1063.74 569.289 1062.7 569.289C1061.77 569.289 1060.93 569.082 1060.2 568.666C1059.46 568.25 1058.84 567.69 1058.33 566.984C1057.81 566.278 1057.42 565.486 1057.15 564.606C1056.89 563.717 1056.76 562.798 1056.76 561.851C1056.76 560.092 1057.05 558.622 1057.63 557.443C1058.22 556.264 1058.98 555.374 1059.91 554.775C1060.83 554.176 1061.82 553.876 1062.85 553.876C1063.77 553.876 1064.51 554.002 1065.07 554.253C1065.64 554.504 1066.08 554.809 1066.4 555.166C1066.72 555.524 1066.95 555.877 1067.1 556.225L1067.11 554.18H1070.46V570.334C1070.46 571.764 1070.18 572.929 1069.62 573.828C1069.07 574.727 1068.31 575.384 1067.34 575.8C1066.38 576.225 1065.28 576.448 1064.04 576.467ZM1063.88 566.549C1064.6 566.549 1065.19 566.452 1065.63 566.259C1066.08 566.056 1066.42 565.819 1066.65 565.548C1066.88 565.268 1067.03 565.026 1067.08 564.823V558.197C1066.99 557.965 1066.81 557.738 1066.55 557.515C1066.29 557.293 1065.94 557.109 1065.52 556.964C1065.09 556.819 1064.57 556.747 1063.95 556.747C1062.88 556.747 1062 557.143 1061.31 557.936C1060.63 558.729 1060.28 559.971 1060.28 561.662C1060.28 563.199 1060.62 564.398 1061.3 565.258C1061.98 566.119 1062.84 566.549 1063.88 566.549ZM1081.03 576.467C1079.75 576.467 1078.59 576.254 1077.55 575.829C1076.53 575.413 1075.73 574.775 1075.17 573.915C1074.61 573.055 1074.39 571.977 1074.52 570.682H1077.83C1077.82 571.233 1077.88 571.726 1078.03 572.161C1078.17 572.605 1078.48 572.958 1078.94 573.219C1079.41 573.48 1080.11 573.611 1081.06 573.611C1081.88 573.611 1082.51 573.495 1082.94 573.263C1083.39 573.031 1083.69 572.678 1083.84 572.204C1084 571.73 1084.08 571.117 1084.08 570.363V566.07C1083.99 566.525 1083.8 567.003 1083.51 567.506C1083.22 568.009 1082.77 568.434 1082.16 568.782C1081.55 569.12 1080.73 569.289 1079.7 569.289C1078.76 569.289 1077.92 569.082 1077.19 568.666C1076.45 568.25 1075.83 567.69 1075.32 566.984C1074.81 566.278 1074.41 565.486 1074.14 564.606C1073.88 563.717 1073.75 562.798 1073.75 561.851C1073.75 560.092 1074.04 558.622 1074.62 557.443C1075.21 556.264 1075.97 555.374 1076.9 554.775C1077.83 554.176 1078.81 553.876 1079.84 553.876C1080.76 553.876 1081.5 554.002 1082.06 554.253C1082.63 554.504 1083.08 554.809 1083.39 555.166C1083.71 555.524 1083.95 555.877 1084.09 556.225L1084.1 554.18H1087.45V570.334C1087.45 571.764 1087.17 572.929 1086.61 573.828C1086.06 574.727 1085.3 575.384 1084.34 575.8C1083.37 576.225 1082.27 576.448 1081.03 576.467ZM1080.87 566.549C1081.6 566.549 1082.18 566.452 1082.63 566.259C1083.07 566.056 1083.41 565.819 1083.64 565.548C1083.87 565.268 1084.02 565.026 1084.08 564.823V558.197C1083.98 557.965 1083.8 557.738 1083.54 557.515C1083.28 557.293 1082.94 557.109 1082.51 556.964C1082.08 556.819 1081.56 556.747 1080.94 556.747C1079.87 556.747 1078.99 557.143 1078.3 557.936C1077.62 558.729 1077.28 559.971 1077.28 561.662C1077.28 563.199 1077.61 564.398 1078.29 565.258C1078.98 566.119 1079.84 566.549 1080.87 566.549ZM1098.08 570.218C1096.55 570.218 1095.23 569.908 1094.11 569.289C1092.99 568.661 1092.14 567.738 1091.54 566.52C1090.94 565.302 1090.64 563.808 1090.64 562.039C1090.64 560.319 1090.95 558.849 1091.58 557.631C1092.22 556.404 1093.1 555.471 1094.21 554.833C1095.32 554.185 1096.59 553.861 1098.03 553.861C1099.46 553.861 1100.67 554.142 1101.67 554.702C1102.69 555.263 1103.46 556.094 1103.99 557.196C1104.53 558.289 1104.79 559.632 1104.79 561.227C1104.79 561.537 1104.78 561.793 1104.76 561.996C1104.75 562.199 1104.74 562.441 1104.72 562.721H1094.05C1094.13 564.335 1094.53 565.524 1095.24 566.288C1095.94 567.042 1096.81 567.419 1097.83 567.419C1098.79 567.419 1099.52 567.216 1100.02 566.81C1100.53 566.394 1100.86 565.93 1101.01 565.418H1104.31C1104.23 566.433 1103.91 567.303 1103.36 568.028C1102.81 568.743 1102.08 569.289 1101.17 569.666C1100.27 570.034 1099.24 570.218 1098.08 570.218ZM1095.61 560.386H1101.38C1101.36 559.226 1101.08 558.332 1100.54 557.704C1100.01 557.066 1099.14 556.747 1097.92 556.747C1096.65 556.747 1095.71 557.172 1095.09 558.023C1094.47 558.864 1094.12 560.029 1094.05 561.517C1094.12 561.082 1094.29 560.788 1094.54 560.633C1094.79 560.469 1095.15 560.386 1095.61 560.386ZM1107.87 570V554.166H1110.8L1111.18 560.27L1110.87 559.429C1110.94 558.791 1111.07 558.144 1111.25 557.486C1111.44 556.829 1111.71 556.225 1112.06 555.674C1112.42 555.123 1112.87 554.683 1113.43 554.355C1113.99 554.016 1114.67 553.847 1115.47 553.847C1115.66 553.847 1115.86 553.857 1116.05 553.876C1116.24 553.895 1116.42 553.929 1116.59 553.977V557.631C1116.26 557.525 1115.9 557.457 1115.53 557.428C1115.16 557.39 1114.82 557.37 1114.51 557.37C1114.14 557.37 1113.73 557.448 1113.29 557.602C1112.86 557.747 1112.46 557.97 1112.09 558.269C1111.72 558.569 1111.46 558.941 1111.29 559.386V570H1107.87Z"
        fill={palette[0]}
      />
      <path d="M452 192V276" stroke={palette[1]} strokeWidth={4} />
      <path d="M203 337H325" stroke={palette[1]} strokeWidth={4} />
      <path d="M1036 529L1036 437" stroke={palette[1]} strokeWidth={4} />
    </svg>
  )
})
