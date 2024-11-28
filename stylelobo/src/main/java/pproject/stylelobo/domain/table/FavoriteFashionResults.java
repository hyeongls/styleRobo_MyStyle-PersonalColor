package pproject.stylelobo.domain.table;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "favorite_fashion_results")
public class FavoriteFashionResults {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "result_id")
    private Long resultId;

    @Column(name = "selected_styles", nullable = false) // color_type 컬럼 매핑
    private String selectedStyles;

    @Column(name = "preferred_style_input", columnDefinition = "TEXT") // TEXT 매핑
    private String preferredStyleInput;

    @Column(name = "diagnosed_style", columnDefinition = "TEXT", nullable = false) // TEXT 매핑
    private String diagnosedStyle;

    @Column(name = "created_at", insertable = false, nullable = false, updatable = false)
    private LocalDateTime createdAt;

    // 외래 키 매핑: user_id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id") // Users 테이블의 user_id와 매핑
    private Users user;

//    @OneToMany(mappedBy = "favoriteFashionResult", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<MyStyleSaved> myStyleSaveds;
}
